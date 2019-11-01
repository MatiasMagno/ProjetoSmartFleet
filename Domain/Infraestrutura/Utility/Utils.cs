using System;
using System.Collections.Generic;
using System.Configuration;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.ComponentModel.DataAnnotations;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace SmartFleet.Domain.Infraestrutura.Utility
{
    public class Utils
    {
        public static string GerarCodigoRandomico()
        {
            Random random = new Random();

            string s = "";
            for (int i = 0; i < 6; i++)
                s = String.Concat(s, random.Next(10).ToString());
            return s;
        }

        public static object getValDynamic<T>(T OriginalObject, string nameProperty)
        {
            return ((object)OriginalObject).GetType().GetProperty(nameProperty).GetValue((object)OriginalObject);
        }

        public static string CreatePassword(int tamanho)
        {
            string SenhaCaracteresValidos = "abcdefghijklmnopqrstuvwxyz1234567890@#!?";
            int valormaximo = SenhaCaracteresValidos.Length;
            Random random = new Random(DateTime.Now.Millisecond);
            StringBuilder senha = new StringBuilder(tamanho);
            for (int indice = 0; indice < tamanho; indice++)
                senha.Append(SenhaCaracteresValidos[random.Next(0, valormaximo)]);
            return senha.ToString();
        }

        public static T BuildCommonType<T>(object rel, List<string> listFields, bool Label = false)
        {
            int j = 0;
            var objRef = rel;
            var fieldRef = "";
            var NewOT = Activator.CreateInstance(typeof(T));

            foreach (var field in listFields)
            {
                objRef = rel;
                fieldRef = field;
                var prop = objRef.GetType().GetProperties().Where(x => x.Name == fieldRef).FirstOrDefault();

                var lstField = fieldRef.Split('.');
                if (lstField.Length > 1)
                {
                    var propX = new Object();
                    for (int i = 0; i < lstField.Length - 1; i++)
                    {
                        propX = objRef.GetType().GetProperty(lstField[i]).GetValue(objRef, null);
                    }
                    objRef = propX;
                    fieldRef = lstField[lstField.Length - 1];
                    prop = objRef.GetType().GetProperty(fieldRef);
                }

                if (prop.CustomAttributes.Count() > 0)
                {
                    var datatype = prop.CustomAttributes.Where(x => x.AttributeType.Name == "DataTypeAttribute");
                    var displayAttribute = prop.CustomAttributes.Where(x => x.AttributeType.Name == "DisplayAttribute");
                    if (displayAttribute.Count() > 0)
                    {
                        var valueData = (prop.GetValue(objRef) == null ? "" : prop.GetValue(objRef).ToString());
                        var nameData = displayAttribute.Select(x => x.NamedArguments)
                            .First().Select(x => x.TypedValue).Select(x => x.Value).First().ToString();

                        if (fieldRef == prop.Name)
                        {
                            if (NewOT.GetType().GetProperties().LastOrDefault().GetValue(NewOT) == null)
                                NewOT.GetType().GetProperties()[j].SetValue(NewOT, (Label ? nameData : valueData));
                            j++;
                        }
                    }
                }
                else
                {
                    if (fieldRef == prop.Name)
                    {
                        var valueData = (prop.GetValue(objRef) == null ? "" : prop.GetValue(objRef).ToString());

                        if (NewOT.GetType().GetProperties().LastOrDefault().GetValue(NewOT) == null)
                            NewOT.GetType().GetProperties()[j].SetValue(NewOT, (Label ? prop.Name : valueData));
                        j++;
                    }
                }
            }

            return (T)NewOT;
        }

       /// <summary>
        /// Formata o CPF ou CNPJ do Cedente ou do Sacado no formato: 000.000.000-00, 00.000.000/0001-00 respectivamente.
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        internal static string FormataCPFCPPJ(string value)
        {
            if (value.Trim().Length == 11)
                return FormataCPF(value);
            else if (value.Trim().Length == 14)
                return FormataCNPJ(value);

            throw new Exception(string.Format("O CPF ou CNPJ: {0} é inválido.", value));
        }

        /// <summary>
        /// Formata o número do CPF 92074286520 para 920.742.865-20
        /// </summary>
        /// <param name="cpf">Sequencia numérica de 11 dígitos. Exemplo: 00000000000</param>
        /// <returns>CPF formatado</returns>
        internal static string FormataCPF(string cpf)
        {
            try
            {
                return string.Format("{0}.{1}.{2}-{3}", cpf.Substring(0, 3), cpf.Substring(3, 3), cpf.Substring(6, 3), cpf.Substring(9, 2));
            }
            catch
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// Formata o CNPJ. Exemplo 00.316.449/0001-63
        /// </summary>
        /// <param name="cnpj">Sequencia numérica de 14 dígitos. Exemplo: 00000000000000</param>
        /// <returns>CNPJ formatado</returns>
        internal static string FormataCNPJ(string cnpj)
        {
            try
            {
                return string.Format("{0}.{1}.{2}/{3}-{4}", cnpj.Substring(0, 2), cnpj.Substring(2, 3), cnpj.Substring(5, 3), cnpj.Substring(8, 4), cnpj.Substring(12, 2));
            }
            catch
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// Formato o CEP em 00.000-000
        /// </summary>
        /// <param name="cep">Sequencia numérica de 8 dígitos. Exemplo: 00000000</param>
        /// <returns>CEP formatado</returns>
        internal static string FormataCEP(string cep)
        {
            try
            {
                return string.Format("{0}{1}-{2}", cep.Substring(0, 2), cep.Substring(2, 3), cep.Substring(5, 3));
            }
            catch
            {
                return string.Empty;
            }
        }

        internal static string FormataTelefone(string telefone)
        {
            try
            {
                var mascara = "{0:(##) ####-####}";
                if (!string.IsNullOrEmpty(telefone) && (telefone.Length == 11))
                    mascara = "{0:(##) #####-####}";

                return !string.IsNullOrEmpty(telefone)? String.Format(mascara, Convert.ToInt64(telefone)): string.Empty;
            }
            catch
            {
                return string.Empty;
            }
        }

    }

    public static class UtilsStc
    {
        public static bool CompareValues(this object val, object source)
        {
            bool ret = false;

            foreach (var item in val.GetType().GetProperties())
            {
                string ValItemDb = item.GetValue(val) == null
                    ? string.Empty
                    : item.GetValue(val).ToString();
                string ValItemUsu = source.GetType().GetProperty(item.Name).GetValue(source) == null
                    ? string.Empty
                    : source.GetType().GetProperty(item.Name).GetValue(source).ToString();

                if (ValItemDb != ValItemUsu)
                {
                    ret = true;
                    break;
                }
            }
            return ret;
        }

        public static string GetPropertyPath<T>(System.Linq.Expressions.Expression<Func<T>> expression)
        {
            System.Linq.Expressions.MemberExpression member = expression.Body as System.Linq.Expressions.MemberExpression;

            if (member == null)
                throw new InvalidOperationException();

            var retList = new List<string>();

            do
            {
                retList.Add(member.Member.Name);
                member = member.Expression as System.Linq.Expressions.MemberExpression;
            } while (member != null);

            retList.RemoveAt(retList.Count - 1);
            retList.Reverse();

            return string.Join(".", retList);
        }

        public static T UpdateValues<T>(this T dst, T src)
        {
            var srcObjectType = src.GetType();

            foreach (var property in dst.GetType().GetProperties())
            {
                // Validação da propriedade de destino

                var propertyType = property.PropertyType;

                if (!property.CanWrite || !property.CanRead)
                    continue;

                if (!(propertyType.IsPrimitive
                    || propertyType.IsEnum
                    || propertyType == typeof(string)
                    || propertyType == typeof(decimal)
                    || propertyType == typeof(DateTime)
                ))
                    continue;

                if (propertyType.IsGenericType && typeof(Nullable<>).Equals(propertyType.GetGenericTypeDefinition()))
                {
                    propertyType = propertyType.GenericTypeArguments[0];

                    if (!(
                        propertyType.IsPrimitive
                        || propertyType.IsEnum
                        || propertyType == typeof(string)
                        || propertyType == typeof(decimal)
                        || propertyType == typeof(DateTime)
                    ))
                        continue;
                }

                // Definição da propriedade

                property.SetValue(dst, property.GetValue(src));
            }

            return dst;
        }

        public static T UpdateValues<T>(this T dst, object src)
        {
            var srcObjectType = src.GetType();

            foreach (var dstProperty in dst.GetType().GetProperties())
            {
                // Validação da propriedade de destino

                var dstPropertyType = dstProperty.PropertyType;
                if (dstPropertyType.IsGenericType && typeof(Nullable<>).Equals(dstPropertyType.GetGenericTypeDefinition()))
                    dstPropertyType = dstPropertyType.GenericTypeArguments[0];

                if (!dstProperty.CanWrite)
                    continue;

                if (!(
                    dstPropertyType.IsPrimitive
                    || dstPropertyType.IsEnum
                    || dstPropertyType == typeof(string)
                    || dstPropertyType == typeof(decimal)
                    || dstPropertyType == typeof(DateTime)
                ))
                    continue;

                // Validação da propriedade de origem

                var srcProperty = srcObjectType.GetProperty(dstProperty.Name);

                if (srcProperty == null || !srcProperty.CanRead)
                    continue;

                var srcPropertyType = srcProperty.PropertyType;

                object value = srcProperty.GetValue(src);

                if (srcPropertyType.IsEnum)
                {
                    srcPropertyType = System.Enum.GetUnderlyingType(srcPropertyType);
                    value = System.Convert.ChangeType(value, srcPropertyType);
                }
                else if (srcPropertyType.IsGenericType && typeof(Nullable<>).Equals(srcPropertyType.GetGenericTypeDefinition()))
                {
                    srcPropertyType = srcPropertyType.GenericTypeArguments[0];

                    if (!(
                        srcPropertyType.IsPrimitive
                        || srcPropertyType.IsEnum
                        || srcPropertyType == typeof(string)
                        || srcPropertyType == typeof(decimal)
                        || srcPropertyType == typeof(DateTime)
                    ))
                        continue;
                }

                // Validação de compatibilidade

                bool valid;
                if (dstPropertyType.IsEnum)
                    valid = System.Enum.GetUnderlyingType(dstPropertyType).IsAssignableFrom(srcPropertyType);
                else
                    valid = dstPropertyType.IsAssignableFrom(srcPropertyType);

                // Definição da propriedade

                if (valid)
                    dstProperty.SetValue(dst, value);
            }

            return dst;
        }

        public static object getValDynamic<T>(this T OriginalObject, string nameProperty)
        {
            return ((object)OriginalObject).GetType().GetProperty(nameProperty).GetValue((object)OriginalObject);
        }

        public static IEnumerable<T> OrderComplete<T>(this IEnumerable<T> OriginalObject, int take, string sortColumn, string sortDirection)
        {
            if (sortDirection == "asc")
            {
                if (take == 0)
                    return OriginalObject.OrderBy(x => x.GetType().GetProperty(sortColumn).GetValue(x, null)).ToList();
                else
                    return OriginalObject.OrderBy(x => x.GetType().GetProperty(sortColumn).GetValue(x, null)).Take(Convert.ToInt32(take)).ToList();
            }
            else if (sortDirection == "desc")
            {
                if (take == 0)
                    return OriginalObject.OrderByDescending(x => x.GetType().GetProperty(sortColumn).GetValue(x, null)).ToList();
                else
                    return OriginalObject.OrderByDescending(x => x.GetType().GetProperty(sortColumn).GetValue(x, null)).Take(Convert.ToInt32(take)).ToList();
            }
            else
            {
                return null;
            }
        }
        public static IEnumerable<T> OrderPaging<T>(this IEnumerable<T> OriginalObject, string sortColumn, string sortDirection, int iDisplayStart, int iDisplayLength)
        {
            if (!string.IsNullOrEmpty(sortColumn))
            {
                var sortList = sortColumn.Split('.');
                if (sortDirection == "asc")
                {
                    if (sortList.Length == 2)
                    {
                        return OriginalObject
                            .OrderBy(x => x.GetType().GetProperty(sortList[0]).GetValue(x, null) != null ?
                                          x.GetType().GetProperty(sortList[0]).GetValue(x, null).GetType().GetProperty(sortList[1]).GetValue(x.GetType().GetProperty(sortList[0]).GetValue(x, null), null) :
                                          true).Skip(iDisplayStart).Take(iDisplayLength).ToList();
                    }
                    else
                    {
                        return OriginalObject
                            .OrderBy(x => x.GetType().GetProperty(sortColumn) != null ?
                                          x.GetType().GetProperty(sortColumn).GetValue(x, null) :
                                          true).Skip(iDisplayStart).Take(iDisplayLength).ToList();
                    }
                }
                else
                {
                    if (sortList.Length == 2)
                    {
                        return OriginalObject
                            .OrderByDescending(x => x.GetType().GetProperty(sortList[0]).GetValue(x, null) != null ?
                                                    x.GetType().GetProperty(sortList[0]).GetValue(x, null).GetType().GetProperty(sortList[1]).GetValue(x.GetType().GetProperty(sortList[0]).GetValue(x, null), null) :
                                                    true).Skip(iDisplayStart).Take(iDisplayLength).ToList();
                    }
                    else
                    {
                        return OriginalObject
                            .OrderByDescending(x => x.GetType().GetProperty(sortColumn) != null ?
                                                    x.GetType().GetProperty(sortColumn).GetValue(x, null) :
                                                    true).Skip(iDisplayStart).Take(iDisplayLength).ToList();
                    }
                }
            }
            return OriginalObject;
        }
        public static string OnlyNumbers(this string source)
        {
            return source != null ? Regex.Replace(source, "[^0-9]", string.Empty) : source;
        }

        /// <summary>
        /// Retorna o valor do [Display(Name = "texto")] do DataAnnotations
        /// </summary>
        /// <typeparam name="T">Objeto referenciado</typeparam>
        /// <param name="property">Nome da propriedade</param>
        /// <returns>Texto do Display</returns>
        public static string GetDisplayDataAnnotations<T>(string property) where T : class
        {
            string display = "<<< ERRO >>>";

            // Cria um novo objeto
            T obj = (T)typeof(T).GetConstructor(new Type[] { }).Invoke(new object[] { });

            // Recupera as propriedades do objeto
            PropertyInfo[] Properties = obj.GetType().GetProperties();

            foreach (PropertyInfo propInfo in Properties)
            {
                if (propInfo.Name == property)
                {
                    IEnumerable<Attribute> attributes = obj.GetType().GetProperty(propInfo.Name).GetCustomAttributes();

                    foreach (Attribute att in attributes)
                    {
                        if (att is DisplayAttribute)
                        {
                            display = ((DisplayAttribute)att).Name;
                            break;
                        }
                    }
                }
            }
            return display;
        }
        public static IEnumerable<TSource> DistinctBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            HashSet<TKey> seenKeys = new HashSet<TKey>();
            foreach (TSource element in source)
            {
                if (seenKeys.Add(keySelector(element)))
                {
                    yield return element;
                }
            }
        }
        public static string MinimizeText(this string source, int length)
        {
            var ret = (source != null && source.Length > length)
                        ? "<sapn title='" + source + "' alt='" + source + "'>" + source.Substring(0, length) + " ...</span>"
                        : source;
            return ret;
        }
        public static string TrimOrDefaultIfEmpty(this string source)
        {
            if (source != null)
            {
                source = source.Trim();
                if (source == string.Empty)
                    source = null;
            }

            return source;
        }
        public static void TrimOrDefaultIfEmpty<T>(this T source, params System.Linq.Expressions.Expression<Func<T, string>>[] expressions)
        {
            foreach (var expression in expressions)
            {
                System.Linq.Expressions.MemberExpression member = expression.Body as System.Linq.Expressions.MemberExpression;

                if (member == null)
                    continue;

                System.Linq.Expressions.Expression.Lambda<Func<T, object>>(
                    System.Linq.Expressions.Expression.Assign(
                        member,
                        System.Linq.Expressions.Expression.TypeAs(
                            System.Linq.Expressions.Expression.Constant(
                                expression.Compile()(source).TrimOrDefaultIfEmpty()
                            ),
                            typeof(string)
                        )
                    ),
                    expression.Parameters
                ).Compile()(source);
            }
        }

        public static string valorExtenso(this string wvalor)
        {
            string[] wunidade = { "", " e um", " e dois", " e trez", " e quatro", " e cinco", " e seis", " e sete", " e oito", " e nove" };
            string[] wdezes = { "", " e onze", " e doze", " e treze", " e quatorze", " e quinze", " e dezesseis", " e dezessete", " e dezoito", " e dezenove" };
            string[] wdezenas = { "", " e dez", " e vinte", " e trinta", " e quarenta", " e cinquenta", " e sessenta", " e setenta", " e oitenta", " e noventa" };
            string[] wcentenas = { "", " e cento", " e duzentos", " e trezentos", " e quatrocentos", " e quinhentos", " e seiscentos", " e setecentos", " e oitocentos", " e novecentos" };
            string[] wplural = { " bilhões", " milhões", " mil", "" };
            string[] wsingular = { " bilhão", " milhão", " mil", "" };
            string wextenso = "";
            string wfracao;
            wvalor = wvalor.Replace("R$", "");
            string wnumero = wvalor.Replace(",", "").Trim();
            wnumero = wnumero.Replace(".", "").PadLeft(14, '0');
            if (Int64.Parse(wnumero.Substring(0, 12)) > 0)
            {
                for (int i = 0; i < 4; i++)
                {
                    wfracao = wnumero.Substring(i * 3, 3);
                    if (int.Parse(wfracao) != 0)
                    {
                        if (int.Parse(wfracao.Substring(0, 3)) == 100) wextenso += " e cem";
                        else
                        {
                            wextenso += wcentenas[int.Parse(wfracao.Substring(0, 1))];
                            if (int.Parse(wfracao.Substring(1, 2)) > 10 && int.Parse(wfracao.Substring(1, 2)) < 20) wextenso += wdezes[int.Parse(wfracao.Substring(2, 1))];
                            else
                            {
                                wextenso += wdezenas[int.Parse(wfracao.Substring(1, 1))];
                                wextenso += wunidade[int.Parse(wfracao.Substring(2, 1))];
                            }
                        }
                        if (int.Parse(wfracao) > 1) wextenso += wplural;
                        else wextenso += wsingular;
                    }
                }
                if (Int64.Parse(wnumero.Substring(0, 12)) > 1) wextenso += " reais";
                else wextenso += " real";
            }
            wfracao = wnumero.Substring(12, 2);
            if (int.Parse(wfracao) > 0)
            {
                if (int.Parse(wfracao.Substring(0, 2)) > 10 && int.Parse(wfracao.Substring(0, 2)) < 20) wextenso = wextenso + wdezes[int.Parse(wfracao.Substring(1, 1))];
                else
                {
                    wextenso += wdezenas[int.Parse(wfracao.Substring(0, 1))];
                    wextenso += wunidade[int.Parse(wfracao.Substring(1, 1))];
                }
                if (int.Parse(wfracao) > 1) wextenso += " centavos";
                else wextenso += " centavo";
            }
            if (wextenso != "") wextenso = wextenso.Substring(3, 1).ToUpper() + wextenso.Substring(4);
            else wextenso = "Nada";
            return wextenso;
        }

        /// <summary>
        /// Converts a string to PascalCase
        /// </summary>
        /// <remarks>Does not modify the original string</remarks>
        /// <param name="str">String to convert</param>
        public static string ToPascalCase(this string str){
            
            // Replace all non-letter and non-digits with an underscore and lowercase the rest.
            string sample = string.Join("", str?.Select(c => Char.IsLetterOrDigit(c) ? c.ToString().ToLower() : "_").ToArray());
            
            // Split the resulting string by underscore
            // Select first character, uppercase it and concatenate with the rest of the string
            var arr = sample?
                .Split(new []{'_'}, StringSplitOptions.RemoveEmptyEntries)
                .Select(s => $"{s.Substring(0, 1).ToUpper()}{s.Substring(1)}");
            
            // Join the resulting collection
            sample = string.Join("", arr);
            
            return sample;
        }

     }

    public static class SessionExtensions
    {
        public static void SetObjectAsJson(this ISession session, string key, object value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }

        public static T GetObjectFromJson<T>(this ISession session, string key)
        {
            var value = session.GetString(key);

            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
        }

    }

    public class HtmlAttributes : DynamicObject, IDictionary<string, object>
    {
        private readonly Dictionary<string, object> dictionary;

        public HtmlAttributes() : this(null) { }

        public HtmlAttributes(object initialProperties)
        {
            this.dictionary = new Dictionary<string, object>();

            this.SetProperties(initialProperties);
        }

        public void SetProperties(object obj)
        {
            if (obj == null)
                return;

            Type type = obj.GetType();

            foreach (var property in type.GetProperties())
            {
                object value;
                try
                {
                    value = property.GetValue(obj);
                }
                catch (Exception)
                {
                    continue;
                }

                Set(property.Name, value, true);
            }
        }

        public void SetProperties(IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return;

            foreach (KeyValuePair<string, object> pair in dictionary)
                Set(pair.Key, pair.Value);
        }


        public IDictionary<string, object> AsDictionary()
        {
            return this;
        }

        public override bool TryGetMember(GetMemberBinder binder, out object result)
        {
            return Get(binder.Name, out result, true);
        }

        public override bool TrySetMember(SetMemberBinder binder, object value)
        {
            return Set(binder.Name, value, true);
        }

        public override bool TryGetIndex(GetIndexBinder binder, object[] indexes, out object result)
        {
            if (indexes == null || indexes.Length != 1 || indexes[0] == null)
            {
                result = null;
                return false;
            }

            return Get(indexes[0].ToString(), out result);
        }

        public override bool TrySetIndex(SetIndexBinder binder, object[] indexes, object value)
        {
            if (indexes == null || indexes.Length != 1 || indexes[0] == null)
                return false;

            return Set(indexes[0].ToString(), value);
        }

        private bool Set(string name, object value, bool isPropertyName = false)
        {
            if (isPropertyName && !ParsePropertyName(name, out name) || !ParseAttributeName(name, out name))
                return false;

            if (value == null)
                dictionary.Remove(name);
            else
                dictionary[name] = value;

            return true;
        }

        private bool Get(string name, out object result, bool isPropertyName = false)
        {
            if (isPropertyName && !ParsePropertyName(name, out name) || !ParseAttributeName(name, out name))
            {
                result = null;
                return false;
            }

            dictionary.TryGetValue(name, out result);

            return true;
        }

        private bool ParseAttributeName(string attributeName, out string result)
        {
            if (attributeName == null)
            {
                result = null;
                return false;
            }
            var culture = System.Globalization.CultureInfo.InvariantCulture;

            attributeName = attributeName.Trim().ToLower(culture);

            if (attributeName == string.Empty)
            {
                result = null;
                return false;
            }

            result = attributeName;
            return true;
        }

        private bool ParsePropertyName(string propertyName, out string result)
        {
            if (propertyName == null)
            {
                result = null;
                return false;
            }

            return ParseAttributeName(propertyName.Replace('_', '-'), out result);
        }

        public void Add(string key, object value)
        {
            if (!ParseAttributeName(key, out key))
                throw new ArgumentException();

            dictionary.Add(key, value);
        }

        public bool ContainsKey(string key)
        {
            if (!ParseAttributeName(key, out key))
                return false;

            return dictionary.ContainsKey(key);
        }

        public ICollection<string> Keys
        {
            get { return dictionary.Keys; }
        }

        public bool Remove(string key)
        {
            if (!ParseAttributeName(key, out key))
                return false;

            return dictionary.Remove(key);
        }

        public bool TryGetValue(string key, out object value)
        {
            if (!ParseAttributeName(key, out key))
            {
                value = null;
                return false;
            }

            return dictionary.TryGetValue(key, out value);
        }

        public ICollection<object> Values
        {
            get { return dictionary.Values; }
        }

        public object this[string key]
        {
            get
            {
                object value;

                if (!Get(key, out value))
                    throw new KeyNotFoundException();

                return value;
            }
            set
            {
                if (!Set(key, value))
                    throw new InvalidOperationException();
            }
        }

        public void Add(KeyValuePair<string, object> item)
        {
            this.Add(item.Key, item.Value);
        }

        public void Clear()
        {
            dictionary.Clear();
        }

        public bool Contains(KeyValuePair<string, object> item)
        {
            string key;

            if (!ParseAttributeName(item.Key, out key))
                return false;

            item = new KeyValuePair<string, object>(key, item.Value);

            return ((ICollection<KeyValuePair<string, object>>)dictionary).Contains(item);
        }

        public void CopyTo(KeyValuePair<string, object>[] array, int arrayIndex)
        {
            ((ICollection<KeyValuePair<string, object>>)dictionary).CopyTo(array, arrayIndex);
        }

        public int Count
        {
            get { return dictionary.Count; }
        }

        public bool IsReadOnly
        {
            get { return false; }
        }

        public bool Remove(KeyValuePair<string, object> item)
        {
            string key;

            if (!ParseAttributeName(item.Key, out key))
                return false;

            item = new KeyValuePair<string, object>(key, item.Value);

            return ((ICollection<KeyValuePair<string, object>>)dictionary).Remove(item);
        }

        public IEnumerator<KeyValuePair<string, object>> GetEnumerator()
        {
            return dictionary.GetEnumerator();
        }

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return dictionary.GetEnumerator();
        }

    }

    public enum CoreExceptionType
    {
        Error = 0,
        Alert = 1,
        Confirmation = 2,
        Success = 3,
        Information = 4,
    }

    public class CoreException: Exception {
        public CoreException(string message, CoreExceptionType type ) {
            CustomMessage = message;
            Type = type;
        }

        public CoreExceptionType Type { get; set; }
        public string CustomMessage { get; set; }
    }


}
