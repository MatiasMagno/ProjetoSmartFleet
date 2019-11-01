using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartFleet.Domain.Infraestrutura.Utility
{
    /// <summary>
    /// Represents the jQuery DataTables request that is sent for server
    /// side processing.
    /// <para>http://datatables.net/usage/server-side</para>
    /// </summary>
    public class DatatableParm
    {
        /// <summary>
        /// Information for DataTables to use for rendering.
        /// </summary>
        public int sEcho { get; set; }

        /// <summary>
        /// Number of columns being displayed (useful for getting individual column search info)
        /// </summary>
        public int iColumns { get; set; }

        /// <summary>
        /// Display start point in the current data set.
        /// </summary>
        public int iDisplayStart { get; set; }

        /// <summary>
        /// Number of records that the table can display in the current draw. 
        /// It is expected that the number of records returned will be equal to this number, 
        /// unless the server has fewer records to return.
        /// </summary>
        public int iDisplayLength { get; set; }

        /// <summary>
        /// Column being sorted on (you will need to decode this number for your database)
        /// </summary>
        public string iSortCol_0 { get; set; }

        /// <summary>
        /// Direction to be sorted - "desc" or "asc".
        /// </summary>
        public string sSortDir_0 { get; set; }

        /// <summary>
        /// Number of columns to sort on
        /// </summary>
        public int? iSortingCols { get; set; }

        /// <summary>
        /// Global search field
        /// </summary>
        public string sSearch { get; set; }

        /// <summary>
        /// Nomes das propriedades utilizadas na montagem do grid
        /// </summary>
        public string sColumns { get; set; }

        /// <summary>
        /// Retorna o nome da propriedade que foi acionado na ordenação
        /// </summary>
        /// <returns></returns>
        public string GetOrderByText()
        {
            string[] items = (sColumns != null ? sColumns.Split(';') : null);
            var item = items[Convert.ToInt32(iSortCol_0)];
            var sortList = item.Split('.');
            if (sortList.Length == 2) 
            {
                var objName = sortList[0].First().ToString().ToUpper() + sortList[0].Substring(1);
                var fieldName = sortList[1].First().ToString().ToUpper() + sortList[1].Substring(1);
                return string.Format("{0}.{1}", objName, fieldName);
            }
            return item.First().ToString().ToUpper() + item.Substring(1);
        }

        // Total de registros retornados na pesquisa antes da paginação de dados
        public int totalRecords { get; set; }

    }

}
