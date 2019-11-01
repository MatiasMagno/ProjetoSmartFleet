(function (root, window, document, undefined) {
    var namedColors = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
        transparent: [0, 0, 0, 0]
    };

    root.parseColor = function (value) {
        var match, ret;
        if (value && value.constructor == Array && (value.length == 3 || value.length == 4)) {
            ret = value;
        } else if (match = /rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)/.exec(value)) {
            ret = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
        } else if (match = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(value)) {
            ret = [parseFloat(match[1]) * 2.55, parseFloat(match[2]) * 2.55, parseFloat(match[3]) * 2.55];
        } else if (match = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(value)) {
            ret = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];
        } else if (match = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(value)) {
            ret = [parseInt(match[1] + match[1], 16), parseInt(match[2] + match[2], 16), parseInt(match[3] + match[3], 16)];
        } else if (match = /rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(value)) {
            ret = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), parseFloat(match[4])];
        } else if (match = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(value)) {
            ret = [parseFloat(match[1]) * 2.55, parseFloat(match[2]) * 2.55, parseFloat(match[3]) * 2.55, parseFloat(match[4])];
        } else {
            return namedColors[$.trim(value).toLowerCase()];
        }

        ret[0] = Math.min(ret[0], 255);
        ret[1] = Math.min(ret[1], 255);
        ret[2] = Math.min(ret[2], 255);

        if (ret[3] != null)
            ret[3] = Math.min(ret[3], 1);

        return ret;
    };

    // GERAL (JavaScript + DOM)
    (function () {

        // Transforma a função atual em um tipo herdadado da função definida pelo parâmetro superClass
        //
        // superClass: Construtor da superclasse.
        // extend: Propriedades e métodos de extensão da classe.
        Function.prototype.inherit = Function.prototype.inherit || function (superClass, extend) {
            var proto = this.prototype = Object.create(superClass.prototype);

            if (extend != null)
                for (var prop in extend)
                    proto[prop] = extend[prop];

            // proto.constructor = this;
        }

        // Verifica uma instância criada pela função cls é compatível com a função atual
        Function.prototype.isAssignableFrom = Function.prototype.isAssignableFrom || function (cls) {
            return cls == this || cls.prototype instanceof this;
        }

        // Convert o HTMLCollection para array
        HTMLCollection.prototype.toArray = HTMLCollection.prototype.toArray || function () {
            var i = 0,
                length = this.length,
                ret = [];

            for (; i < length; i++)
                ret.push(this[i]);

            return ret;
        }

        // Convert o NodeList para array
        NodeList.prototype.toArray = NodeList.prototype.toArray || function () {
            var i = 0,
                length = this.length,
                ret = [];

            for (; i < length; i++)
                ret.push(this[i]);

            return ret;
        }

        // Verifica se o nó é descendente do nó definido no parâmetro node
        Node.prototype.isDescendantOf = Node.prototype.isDescendantOf || function (node) {
            if (node == null)
                throw 'node = ' + node;

            return (
                this.parentNode === node ||
                (
                    this.parentNode != null &&
                    this.parentNode.isDescendantOf(node)
                )
            );
        };

        // Verifica se todos os elementos da array satisfazem uma condição
        Array.prototype.all = Array.prototype.all || function (callback, thisArg) {
            if (thisArg == null)
                thisArg = (function () { return this; })(); // strict

            for (var i = 0, l = this.length; i < l; i++)
                if (!callback.call(thisArg, this[i]))
                    return false;
            return true;
        };

        // Verifica se algum dos elementos da array satisfaz uma condição
        Array.prototype.any = Array.prototype.any || function (callback, thisArg) {
            if (thisArg == null)
                thisArg = (function () { return this; })(); // strict

            for (var i = 0, l = this.length; i < l; i++)
                if (callback.call(thisArg, this[i]))
                    return true;
            return false;
        };

        // Verifica se um array contém um determinado elemento
        Array.prototype.contains = Array.prototype.contains || function (searchElement, fromIndex) {
            return this.indexOf(searchElement, fromIndex) != -1;
        };

        // Retorna o primeiro elemento que satisfaz uma condição
        Array.prototype.first = Array.prototype.first || function (callback, thisArg) {
            if (thisArg == null)
                thisArg = (function () { return this; })(); // strict

            for (var i = 0, l = this.length; i < l; i++)
                if (callback.call(thisArg, this[i]))
                    return this[i];
            return;
        };

        // Insere um elemento no índice específico
        Array.prototype.insert = Array.prototype.insert || function (index/*, elements ... */) {
            var params = this.slice.call(arguments);
            params.splice(1, 0, 0);
            this.splice.apply(this, params);
            return;
        };

        // Remove o elemento do índice esécífico
        Array.prototype.remove = Array.prototype.remove || function (index) {
            this.splice(index, 1);
            return;
        };

        // Determina se uma string começa com os mesmo caracteres de outra string
        if (!String.prototype.startsWith)
            String.prototype.startsWith = function (searchString, position) {
                position = position || 0;
                return this.indexOf(searchString, position) === position;
            };

        // Retorna uma nova string com certos caracteres substituídos
        // por sua sequência hexadecial.
        String.prototype.encode = function () {
            return this.replace(/\W/g, function (x) {
                var codepoint = x.codePointAt(0);
                x = codepoint.toString(16);

                return '%u' + '0'.repeat(4 - x.length) + x;
            });
        }

        //Método CodePoint sobescrito para ser compaível com todas versões de navegadores
        /*! http://mths.be/codepointat v0.1.0 by @mathias */
        if (!String.prototype.codePointAt) {
            (function () {
                'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
                var codePointAt = function (position) {
                    if (this == null) {
                        throw TypeError();
                    }
                    var string = String(this);
                    var size = string.length;
                    // `ToInteger`
                    var index = position ? Number(position) : 0;
                    if (index != index) { // better `isNaN`
                        index = 0;
                    }
                    // Account for out-of-bounds indices:
                    if (index < 0 || index >= size) {
                        return undefined;
                    }
                    // Get the first code unit
                    var first = string.charCodeAt(index);
                    var second;
                    if ( // check if it’s the start of a surrogate pair
                      first >= 0xD800 && first <= 0xDBFF && // high surrogate
                      size > index + 1 // there is a next code unit
                    ) {
                        second = string.charCodeAt(index + 1);
                        if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
                            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                            return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                        }
                    }
                    return first;
                };
                if (Object.defineProperty) {
                    Object.defineProperty(String.prototype, 'codePointAt', {
                        'value': codePointAt,
                        'configurable': true,
                        'writable': true
                    });
                } else {
                    String.prototype.codePointAt = codePointAt;
                }
            }());
        }

        //Método para sobescrever o repeat (Compatibilidade do IE)
        //This method has been added to the ECMAScript 6 specification and may not be available in all JavaScript implementations yet. 
        //However, you can polyfill String.prototype.repeat() with the following snippet:
        if (!String.prototype.repeat) {
            String.prototype.repeat = function (count) {
                'use strict';
                if (this == null) {
                    throw new TypeError('can\'t convert ' + this + ' to object');
                }
                var str = '' + this;
                count = +count;
                if (count != count) {
                    count = 0;
                }
                if (count < 0) {
                    throw new RangeError('repeat count must be non-negative');
                }
                if (count == Infinity) {
                    throw new RangeError('repeat count must be less than infinity');
                }
                count = Math.floor(count);
                if (str.length == 0 || count == 0) {
                    return '';
                }
                // Ensuring count is a 31-bit integer allows us to heavily optimize the
                // main part. But anyway, most current (August 2014) browsers can't handle
                // strings 1 << 28 chars or longer, so:
                if (str.length * count >= 1 << 28) {
                    throw new RangeError('repeat count must not overflow maximum string size');
                }
                var rpt = '';
                for (; ;) {
                    if ((count & 1) == 1) {
                        rpt += str;
                    }
                    count >>>= 1;
                    if (count == 0) {
                        break;
                    }
                    str += str;
                }
                // Could we try:
                // return Array(count + 1).join(this);
                return rpt;
            }
        }

        Object.resolve = Object.resolve || function (base, path) {
            if (base == null)
                base = (function () { return this; })(); // strict

            if (path == null)
                return base;

            path = String(path);

            if (path[0] != '[')
                path = '.' + path;

            return (function () { return eval('this' + path) }).call(base);
        };

        {
            var _replace = String.prototype.replace;
            String.prototype.replace = function replace(/*regexp|substr, newSubStr|function[, flags]*/) {
                var args = Array.prototype.slice.call(arguments);

                if (args.length === 3 && args[2] != null) {
                    return _replace.call(
                        this,
                        new RegExp(String(args[0]).replace(/[\^$()[\]{}*?+\\]/g), args[2]),
                        args[1]
                    );
                }

                return _replace.apply(this, args);
            };
        }

        root.lazyFunction = function lazyFunction(fn) {
            if (typeof fn != 'function')
                return;

            return function () {
                var self = this,
                    args = Array.prototype.slice.call(arguments);

                setTimeout(function () {
                    fn.apply(self, args);
                }, 0)
            }
        };

        // parseUrl
        (function () {
            var parserElement;
            root.parseUrl = function parseUrl(url) {
                parserElement = parserElement || document.createElement('a');

                parserElement.href = url;

                return {
                    protocol: parserElement.protocol,
                    username: parserElement.username,
                    password: parserElement.password,
                    host: parserElement.host,
                    hostname: parserElement.hostname,
                    port: parserElement.port,
                    pathname: parserElement.pathname,
                    search: parserElement.search,
                    hash: parserElement.hash,
                    url: parserElement.href
                }
            }
        })();

        // parseDate
        root.parseDate = function parseDate(date/*, params */) {
            if (date instanceof Date)
                return date;

            var tmp;
            if (typeof date == "string" && (tmp = /\/Date\((-?\d+)([+-]\d{4})?\)\//.exec(date))) {
                var milliseconds = parseInt(tmp[1]),
                    offset = parseInt(tmp[2] | 0);

                if (offset)
                    milliseconds -= ((offset % 100) + parseInt(offset / 100) * 60) * 60000;

                return new Date(milliseconds);
            }

            return Globalize.parseDate.apply(Globalize, arguments);
        };

        // parseBool
        root.parseBool = function parseBool(value) {
            if (typeof value == "string") {
                value = value.toLowerCase();
                if (value === "0" || value === "false")
                    return false;
            }

            return !!value;
        }

        root.eval2 = function eval2(script, context, scope) {
            if (arguments.length == 0)
                return;

            var args = [],
                values = [];

            script = 'return eval(' + JSON.stringify(script) + ")";

            if (scope != null && scope !== function () { return this }()) {
                var scopeName;
                do {
                    scopeName = "$" + parseInt(Math.random() * 10000000000000000);
                    with (scope) {
                        try { scopeName } catch (e) { scopeName = false }
                    }
                }
                while (!scopeName)

                script = "with(" + scopeName + "){" + script + "}";
                values.push(scope);
                args.push(scopeName);
            }

            args.push(script);

            return Function.apply(null, args).apply(context == null ? this : context, values);
        };

        // funções include, include_once
        // usa: jQuery.ajax, jQuery.holdReady
        (function ($) {
            // 
            var
                // include_data
                // Mantém em cache o estado das urls chamadas pela função include.
                // Cada url é uma propriedade chave de include_files e o valor representa o estado.
                //
                // Os possíveis valores são:
                //      (string)    => script da url
                //      (object)    => requisição em andamento (jqXHR)
                //      undefined   => ainda não requisitada ou falhou
                //      false       => carregada através de um elemento script (útil para as funções include_once e require_once)
                //      true        => a url é o documento atual  (útil para as funções include_once e require_once)
                include_data = {},

                // include_queue
                // Fila de processamento dos includes.
                include_queue = [];

            include_data[window.location.href] = true;

            // Executa a fila de processamento
            include_queue.process = function process() {
                while (this.length) {
                    var data = include_data[this[0]];

                    switch (typeof data) {
                        case 'object':
                            // Requisição em andamento,
                            // para o processamento.
                            // Tentará novamente quando
                            // a próxima requisição completar.

                            return;

                        case 'string':
                            // Requisição completada.
                            // Executa.
                            include_log('eval', this[0]);

                            // chama eval dentro de uma função anônima para
                            // definir o escopo do código como o objeto raíz
                            // (window ou undefined, no modo estrito)
                            (function () { eval(data); })();

                            break;

                        case 'undefined':
                            // Requisição falhou.
                    }

                    this.shift();
                }
            }

            // registra log (função temporária)
            function include_log() {
                console.log.apply(console, arguments);
            }

            // inicia o carregamento
            function load(url, successCallback, failCallback, completeCallback) {
                include_log('load', url);

                var xhr = include_data[url] = $.ajax(url)
                    .done(function (data) {
                        include_log('load done', url);
                        include_data[url] = data;

                        if (successCallback)
                            successCallback(url, data);
                    })
                    .fail(function () {
                        include_log('load fail', url);
                        delete include_data[url];

                        if (failCallback)
                            failCallback(url);
                    });

                if (completeCallback)
                    xhr.always(function () {
                        include_log('load complete', url);
                        completeCallback(url);
                    });
            }

            function holdReady(wait) {
                $.holdReady(wait);
            }

            // verifica se uma url foi definida
            function is_defined(url) {
                // verifica se a url já foi incluída
                if (include_data[url] !== undefined)
                    return true;

                // atualiza include_data com os elementos script
                document.getElementsByTagName("script")
                    .toArray()
                    .forEach(function (element) {
                        var src = element.src;
                        if (src && include_data[src] === undefined) {
                            include_data[src] = false;
                        }
                    });

                // verifica se a url já foi incluída por um elemento script
                return (include_data[url] !== undefined);
            }

            // Carrega e processa o conteúdo uma url específica.
            root.include = function include(url) {
                url = parseUrl(url).url;

                include_log('include', url);

                // Inclui na fila de processamento.
                include_queue.push(url);

                switch (typeof include_data[url]) {
                    case 'undefined':
                    case 'boolean':
                        // Ainda não requisitado ou falhou na última tentativa.
                        // Inicia a requisição.

                        holdReady(true);

                        load(
                            url,
                            // ok
                            undefined,
                            // falha
                            undefined,
                            // completo
                            function (url) {
                                include_queue.process();

                                holdReady(false);
                            }
                        );

                        return;
                }

                include_queue.process();
            }

            // Carrega e processa o conteúdo uma url específica, similar a
            // função include. Porém, se a url já tiver sido incluída antes,
            // não será realizada novamente.
            root.include_once = function include_once(url) {
                url = parseUrl(url).url;

                include_log('include_once', url);

                // verifica se a url já foi incluída
                if (is_defined(url))
                    return false;

                include(url);
                return true;
            }

            // require interno
            function require_internal(once/*, urls ...[, successCallback[, failCallback]] */) {
                // argumentos
                var urls = Array.prototype.slice.call(arguments, 1),
                    successCallback,
                    failCallback;

                if (typeof urls[urls.length - 1] == "function") {
                    if (typeof urls[urls.length - 2] == "function") {
                        successCallback = urls[urls.length - 2];
                        failCallback = urls[urls.length - 1];
                        urls = urls.slice(0, -2);
                    } else {
                        successCallback = urls[urls.length - 1];
                        urls.pop();
                    }
                }

                // formata as urls
                urls = urls.map(function (url) {
                    return parseUrl(url).url;
                });

                include_log('require' + (once ? '_once' : ''), urls);

                var
                    // variáveis para callback

                    infos = [],
                    someFail = false,
                    loadCounter = 0;

                // controlador para callback
                function onComplete() {
                    if (loadCounter == 0) {
                        include_log('require' + (once ? '_once' : '') + ' complete ' + (someFail ? 'fail' : 'success'), urls);
                        if (someFail) {
                            if (failCallback)
                                failCallback(infos);
                        } else {
                            include_queue.process();
                            if (successCallback)
                                successCallback(infos);
                        }

                        holdReady(false);
                    }
                }

                holdReady(true);

                urls.forEach(function (url) {
                    var info = {
                        url: url,
                        status: true
                    },
                        loader,
                        defined = false;

                    infos.push(info);

                    if (once)
                        defined = is_defined(url);

                    switch (typeof include_data[url]) {
                        case 'object':
                            // está em carregamento
                            loader = include_data[url];
                            break;

                        case 'undefined':
                        case 'boolean':
                            // Ainda não requisitado ou falhou na última tentativa.
                            // Inicia a requisição.

                            loader = load(url)
                            break;
                    }

                    if (loader) {
                        loadCounter++;

                        loader.fail(function (url) {
                            someFail = true;
                            info.status = false;
                        });

                        loader.always(function (url) {
                            loadCounter--;
                            onComplete();
                        });
                    }

                    // Inclui na fila de processamento.
                    if (!once || !defined)
                        include_queue.push(url);
                });

                onComplete();
            }

            // Carrega um lista de urls, se todas forem devidamente carregadas, elas são
            // processadas na ordem em que aparecem.
            //
            // Após processar todas as urls, a função successCallback é chamada.
            //
            // Caso alguma url não seja devidamente carregada, nenhuma url é processada e a
            // função failCallback é chamada.
            // 
            // As funções callback recebem uma array de objetos contendo a url e o status de
            // carregamento de cada url.
            root.require = function require(/* urls ...[, successCallback[, failCallback]] */) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(false);

                return require_internal.apply(this, args);
            }

            // Carrega um lista de urls, se todas forem devidamente carregadas, elas são
            // processadas na ordem em que aparecem.
            //
            // Serão processadas apenas as urls que ainda não foram processadas, pelas funções
            // include, include_once, require, require_once ou em algum elemento script.
            //
            // Após processar todas as urls, a função successCallback é chamada.
            //
            // Caso alguma url não seja devidamente carregada, nenhuma url é processada e a
            // função failCallback é chamada.
            // 
            // As funções callback recebem uma array de objetos contendo a url e o status de
            // carregamento de cada url.
            root.require_once = function require_once(/* urls ...[, successCallback[, failCallback]] */) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(true);

                return require_internal.apply(this, args);
            }
        })(jQuery);
    })();

    // jQuery
    (function ($) {

        /// plugin para animar propriedades css de cor
        $.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (i, step) {
            $.fx.step[step] = function (fx) {
                if (!fx.colorInit) {
                    fx.start = parseColor($.css(fx.elem, step));
                    fx.end = parseColor(fx.end);
                    fx.colorInit = true;
                }

                var aStart = fx.start[3],
                    aEnd = fx.end[3];

                if (aStart == null)
                    aStart = 1;

                if (aEnd == null)
                    aEnd = 1;

                fx.elem.style[step] = "rgba(" + [Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0), Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0), Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0), Math.max(Math.min(fx.pos * (aEnd - aStart) + aStart, 1), 0)].join(",") + ")"
            }
        });

        // plugin para verificar se um ou mais campos ou formulários foram alterados
        var ORIGINAL_VALUE = "originalValue";

        $.fn.extend({
            trackChanges: function () {
                var inputs = $()
                    .add($(this).filter(function (i, element) { return $(element).is(":input"); }))
                    .add($(":input", this));

                inputs.each(function (i, element) {
                    var $element = $(element),
                        value = $element.val();

                    if (value === undefined)
                        value = null;

                    $element.data(ORIGINAL_VALUE, value);
                });
            }
            ,
            isChanged: function () {
                return $(this).toArray().any(function (element) {
                    if (element instanceof HTMLFormElement)
                        return $(":input", element).isChanged();

                    var $element = $(element),
                        originalValue = $element.data(ORIGINAL_VALUE);

                    return originalValue === undefined
                        ? false
                        : $element.val() !== originalValue;
                });
            }
            ,
            serializeObject: function () {
                var ret = {};

                $(this).serializeArray().forEach(function (item) {
                    var name = item.name;

                    if (name in ret) {
                        var actualValue = ret[name];

                        if (Array.isArray(actualValue))
                            actualValue.push(item.value);
                        else
                            ret[name] = [actualValue, item.value];
                    } else
                        ret[name] = item.value;
                });

                return ret;
            }
            ,
            fill: function (data) {
                var inputs = this.find(":input");

                inputs.each(function (i, element) {
                    var $element = $(element),
                        name = element.name,
                        expr = $element.attr('data-fill-expr'),
                        format = $element.attr('data-fill-format'),
                        err,
                        value;

                    if (expr != null) {
                        try {
                            value = eval2(expr, element, data);
                        } catch (e) {
                            err = '#EXPR!';
                        }
                    } else if (name) {
                        try {
                            value = Object.resolve(data, name);
                        } catch (ex) { }
                    }

                    if (err) {
                        $element.val(err);
                    } else if (value !== undefined) {
                        if (format)
                            value = Globalize.format(value, format);

                        switch (element.tagName) {
                            case 'INPUT':
                                switch (($element.prop("type") || "").toLowerCase()) {
                                    case "radio":
                                        $element.prop("checked", $element.val() == value);
                                        return;
                                }
                                $element.val(value);
                                break;

                            case 'SELECT':
                                var byValue = parseBool($element.attr('data-select-byvalue')),
                                    byContent = parseBool($element.attr('data-select-bycontent'));

                                byValue = byContent ? byValue : true; // default

                                var $options = $element.find('option');

                                $options.filter(':selected').prop('selected', false);

                                if (byContent) {
                                    $options.each(function (i, opt) {
                                        var $opt = $(opt);
                                        if ($opt.text() == value)
                                            $opt.prop("selected", true);
                                    });
                                }

                                if (byValue) {
                                    $options.each(function (i, opt) {
                                        var $opt = $(opt);
                                        if ($opt.val() == value)
                                            $opt.prop("selected", true);
                                    });
                                }

                                break;

                            default:
                                $element.val(value);
                                break;
                        }
                    }
                });
            }
        });

        // datepicker
        (function () {
            var _datepicker = $.fn.datepicker,
                attributes = {},
                options = {
                    // Whether or not to close the datepicker immediately when a date is selected.
                    autoclose: parseBool,

                    // Whether or not to show week numbers to the left of week rows.
                    calendarWeeks: parseBool,

                    //If true, displays a “Clear” button at the bottom of the datepicker to clear the input value.
                    clearBtn: parseBool,

                    // Appends the date picker popup to a specific element; eg: container: ‘#picker-container’ (will default to “body”)
                    container: String,

                    // Array of date strings or a single date string formatted in the given date format
                    datesDisabled: String,

                    // Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
                    // Example: disable weekends: '06' or '0,6'.
                    daysOfWeekDisabled: String,

                    // Days of the week that should be highlighted. Values are 0 (Sunday) to 6 (Saturday).
                    // Example: highlight weekends: '06' or '0,6'
                    daysOfWeekHighlighted: String,

                    // TODO
                    // defaultViewDate: undefined,

                    // If true, no keyboard will show on mobile devices.
                    disableTouchKeyboard: parseBool,

                    // If false the datepicker will not show on a readonly datepicker field.
                    enableOnReadonly: parseBool,

                    // TODO
                    // endDate: undefined,

                    // Whether or not to force parsing of the input value when the picker is closed.
                    forceParse: parseBool,

                    // TODO
                    // assumeNearbyYear: undefined,

                    // The date format, combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.
                    //   d, dd: Numeric date, no leading zero and leading zero, respectively. Eg, 5, 05.
                    //   D, DD: Abbreviated and full weekday names, respectively. Eg, Mon, Monday.
                    //   m, mm: Numeric month, no leading zero and leading zero, respectively. Eg, 7, 07.
                    //   M, MM: Abbreviated and full month names, respectively. Eg, Jan, January
                    //   yy, yyyy: 2- and 4-digit years, respectively. Eg, 12, 2012.
                    format: String,

                    // If true, selecting a year or month in the datepicker will update the input value immediately.
                    immediateUpdates: parseBool,

                    // TODO
                    // inputs: undefined,

                    // Whether or not to allow date navigation by arrow keys.
                    keyboardNavigation: parseBool,

                    // The IETF code of the language to use for month and day names. 
                    language: String,

                    // Set a maximum limit for the view mode.
                    // Accepts: “days”, “months”, “years”, “decades”, “centuries”.
                    maxViewMode: String,

                    // Set a minimum limit for the view mode.
                    // Accepts: “days”, “months”, “years”, “decades”, “centuries”.
                    minViewMode: String,

                    // Enable multidate picking.
                    multidate: parseBool,

                    // The string that will appear between dates when generating the input’s value.
                    multidateSeparator: parseBool,

                    // A space-separated string consisting of one or two of “left” or “right”, “top” or “bottom”, and “auto”
                    orientation: String,

                    // If false, the datepicker will be prevented from showing when the input field associated with it receives focus.
                    showOnFocus: parseBool,

                    // TODO
                    // startDate: undefined,

                    // The view that the datepicker should show when it is opened.
                    // Accepts: “month”, “year”, “decade”, “century”, “millennium”.
                    startView: String,

                    // TODO
                    // templates: undefined,

                    // The string that will appear on top of the datepicker.
                    title: String,

                    // If true, the “Today” button will only move the current date into view; if “linked”, the current date will also be selected.
                    todayBtn: function (value) {
                        if (value === "linked")
                            return value;
                        return parseBool(value);
                    },

                    // If true, highlights the current date.
                    todayHighlight: String,

                    // If true, selecting the currently active date in the datepicker will unset the respective date.
                    toggleActive: parseBool,

                    // Day of the week start. 0 (Sunday) to 6 (Saturday)
                    weekStart: parseInt,

                    // The CSS z-index of the open datepicker is the maximum z-index of the input and all of its DOM ancestors plus the zIndexOffset.
                    zIndexOffset: parseInt
                };

            for (var opt in options)
                attributes[opt.replace(/(?!^)[A-Z]/g, function (x) { return "-" + x; }).toLowerCase()] = opt;

            $.fn.datepicker = function () {
                var args = Array.prototype.slice.call(arguments);

                if (args.length === 0) {
                    $(this).each(function (i, el) {
                        var opts = {};

                        Array.prototype.slice.call(el.attributes)
                            .forEach(function (attr) {
                                var attrName = attr.name;

                                if (attrName.startsWith("data-date-") === -1)
                                    return;

                                attrName = attrName.slice(10);

                                if (!(attrName in attributes))
                                    return;

                                var option = attributes[attrName],
                                    optionValue = options[option];

                                if (typeof optionValue == "function")
                                    optionValue = optionValue(attr.value);
                                else if (optionValue === undefined)
                                    optionValue = attr.value;

                                opts[option] = optionValue;;
                            });

                        $(el).datepicker(opts);
                    });

                    return this;
                }

                return _datepicker.apply(this, args);
            }
        })();

        // mask
        (function () {
            var _mask = $.fn.mask,
                attributes = {},
                options = {
                    reverse: parseBool,
                    clearIfNotMatch: parseBool,
                    selectOnFocus: parseBool
                },

                avoidMultiple = false,
                avoidMultipleHandler = function (e) {

                    if ([8, 9, 16, 17, 18, 35, 36, 37, 38, 39, 40, 46, 91, 92].indexOf(e.keyCode) != -1)
                        return;

                    if (avoidMultiple) {
                        e.preventDefault();
                        return false;
                    };

                    avoidMultiple = true;
                },
                avoidMultipleOff = function (e) {
                    avoidMultiple = false;
                };

            for (var opt in options)
                attributes[opt.replace(/(?!^)[A-Z]/g, function (x) { return "-" + x; }).toLowerCase()] = opt;

            $.fn.mask = function () {
                var args = Array.prototype.slice.call(arguments);

                if (args.length === 0) {
                    $(this).each(function (i, el) {
                        var mask = el.getAttribute('data-mask'),
                            opts = {};

                        if (mask == null)
                            return;

                        Array.prototype.slice.call(el.attributes)
                            .forEach(function (attr) {
                                var attrName = attr.name;

                                if (attrName.startsWith("data-mask-") === -1)
                                    return;

                                attrName = attrName.slice(10);

                                if (!(attrName in attributes))
                                    return;

                                var option = attributes[attrName],
                                    optionValue = options[option];

                                if (typeof optionValue == "function")
                                    optionValue = optionValue(attr.value);
                                else if (optionValue === undefined)
                                    optionValue = attr.value;

                                opts[option] = optionValue;;
                            });

                        $(el)
                            .off('keyup', avoidMultipleOff)
                            .off('focus', avoidMultipleOff)
                            .off('keydown', avoidMultipleHandler)
                            .on('keyup', avoidMultipleOff)
                            .on('focus', avoidMultipleOff)
                            .on('keydown', avoidMultipleHandler)
                            .mask(mask, opts);
                    });

                    return this;
                }

                this.off('keyup', avoidMultipleOff)
                    .off('focus', avoidMultipleOff)
                    .off('keydown', avoidMultipleHandler)
                    .on('keyup', avoidMultipleOff)
                    .on('focus', avoidMultipleOff)
                    .on('keydown', avoidMultipleHandler);

                return _mask.apply(this, args);
            }
        })();

        // DataTable
        (function () {
            var _dataTable = $.fn.dataTable,
                editorDrivers = {};

            function editorBase(options) {
                this.init(options);
            };

            editorBase.inherit(Object, {
                element: function () { },
                value: function () { },

                focus: function () {
                    var $control = $(this.element());

                    if ($control.is(':input'))
                        $control.focus();
                    else
                        $control.find(':input').first().focus();
                },

                focused: function () {
                    var $control = $(this.element());

                    if (!$control.is(':input'))
                        $control.find(':input');

                    if (!$control[0])
                        return false;

                    return document.activeElement === $control[0];
                },

                rules: function () {
                    var $control = $(this.element());

                    if (!$control.is(':input'))
                        $control = $control.find(':input').first();

                    $control.rules.apply($control, Array.prototype.slice.call(arguments));
                },

                on: function (event) {
                    var args = Array.prototype.slice.call(arguments);

                    if (['change'].contains(arguments[0])) {
                        var $this = $(this);
                        $this.on.apply($this, args);
                    } else {
                        $control = $(this.element());
                        $control.on.apply($control, args);
                    }
                    return this;
                },

                trigger: function (event) {
                    var args = Array.prototype.slice.call(arguments),
                        eventType = typeof event == 'string' ? event : event.type;

                    if (['change'].contains(eventType)) {
                        var $this = $(this);
                        $this.trigger.apply($this, args);
                    } else {
                        $control = $(this.element());
                        $control.trigger.apply($control, args);
                    }
                    return this;
                }
            });

            function registerEditor(identifier, definition) {
                var cctor = function (options) {
                    editorBase.call(this, options);
                };

                cctor.inherit(editorBase, definition);

                editorDrivers[identifier] = cctor;
            };

            function createEditor(identifier, options) {
                return new editorDrivers[identifier](options);
            };

            //// datepicker

            registerEditor('datepicker', {
                init: function (options) {
                    this.options = options;
                    this._value = null;
                },
                element: function () {
                    var driver = this,
                        control = this.control;

                    if (control)
                        return control;

                    control = document.createElement('input');

                    var $control = $(control),
                        options = this.options;

                    $control.datepicker($.extend({}, options, { immediateUpdates: false }));

                    if (options.className)
                        $control.addClass(options.className);

                    if (options.mask)
                        $control.mask(options.mask, options.maskOptions);

                    if (options.css)
                        $control.css(options.css);

                    if (options.validation)
                        $control.rules('add', options.validation);

                    $control
                        .on('changeDate', function (e) {
                            driver.value(e.date);
                        }).on('clearDate', function (e) {
                            driver.value(e.date);
                        })
                    ;

                    return this.control = control;
                },

                value: function (value) {
                    // GET value
                    if (arguments.length === 0)
                        return this._value;

                    // SET value
                    var options = this.options,
                        curValue = this._value,
                        changed = false;

                    // parse
                    if (!(value instanceof Date))
                        value = Globalize.parseDate(value, datepickerFormatToGlobalize(options.format), options.language);

                    if (curValue == null)
                        changed = value != null;
                    else if (value == null)
                        changed = true;
                    else
                        changed = value.getTime() !== curValue.getTime();

                    // control

                    if (changed) {
                        this._value = value;

                        $(this.element()).datepicker('setDate', value);

                        this.trigger($.Event('change', {
                            value: value,
                            oldValue: curValue
                        }));
                    }

                    return value;
                }
            });

            //// dropdown

            registerEditor('dropdown', {
                init: function (options) {
                    this.options = options;
                    this._value = null;
                },

                element: function () {
                    var driver = this,
                        control = this.control;

                    if (control)
                        return control;

                    control = document.createElement('select');

                    var $control = $(control),
                        options = this.options;

                    // empty options
                    control.appendChild(document.createElement('option'));

                    // other options
                    options.list.forEach(function (listItem) {
                        var option = document.createElement('option');

                        $(option).text(listItem.text);
                        option.value = listItem.value;

                        control.appendChild(option);
                    });

                    if (options.className)
                        $control.addClass(options.className);

                    if (options.css)
                        $control.css(options.css);

                    if (options.validation)
                        $control.rules('add', options.validation);

                    $control
                        .on('blur', function (e) {
                            driver.value($control.val());
                        })

                    return this.control = control;
                },

                value: function (value) {
                    // GET value
                    if (arguments.length === 0)
                        return this._value;

                    var options = this.options,
                        curValue = this._value;

                    // parse
                    var literalValue = value;
                    value = parseValue(options.dataType, value, options.language);

                    if (value == null || value === "") {
                        value = (
                            options.list.first(function (x) {
                                return x.accept && x.accept.contains(literalValue);
                            }) || { value: null }
                        ).value;
                    } else {
                        value = (
                            options.list.first(function (x) {
                                return x.value === value
                                    || (x.accept && x.accept.contains(literalValue));
                            }) || { value: null }
                        ).value;
                    }

                    if (curValue !== value) {
                        this._value = value;

                        var $control = $(this.element()),
                            strVal;

                        if (value == null)
                            strVal = '';
                        else if (typeof value === 'number')
                            strVal = Globalize.format(value, options.format, options.language);
                        else
                            strVal = value.toString();

                        $control.val(strVal);

                        this.trigger($.Event('change', {
                            value: value,
                            oldValue: curValue
                        }));
                    }

                    return value;
                }
            });

            //// textbox

            registerEditor('textbox', {
                init: function (options) {
                    this.options = options;
                    this._value = null;
                },

                element: function () {
                    var driver = this,
                        options = driver.options,
                        control = driver.control;

                    if (control)
                        return control;

                    control = document.createElement('input');

                    var $control = $(control),
                        options = driver.options;

                    if (options.className)
                        $control.addClass(options.className);

                    if (options.mask)
                        $control.mask(options.mask, options.maskOptions);

                    if (options.css)
                        $control.css(options.css);

                    if (options.validation)
                        $control.rules('add', options.validation);

                    $control
                        .on('blur', function (e) {
                            driver.value($control.val());
                        })
                    ;

                    return driver.control = control;
                },

                value: function (value) {
                    // GET value
                    if (arguments.length === 0)
                        return this._value;

                    var options = this.options,
                        curValue = this._value,
                        strVal;

                    value = parseValue(options.dataType, value, options.language);

                    if (curValue !== value) {
                        this._value = value;

                        var $control = $(this.element()),
                            strVal,
                            mask = !!options.mask;

                        if (value == null)
                            strVal = '';
                        else if (typeof value === 'number') {
                            if (options.format || !mask) {
                                strVal = Globalize.format(value, options.format, options.language);
                                mask = false;
                            }
                        } else
                            strVal = value.toString();

                        $control.val(strVal);

                        if (mask)
                            $control.keyup(); // aplicar máscara

                        this.trigger($.Event('change', {
                            value: value,
                            oldValue: curValue
                        }));
                    }

                    return value;
                }
            });

            function parseValue(dataType, value) {
                if (value == null)
                    return null;

                switch (dataType) {
                    case 'number':
                    case 'int':
                        // parse
                        if (typeof value !== 'number')
                            value = Globalize.parseFloat(value.toString(), 10, arguments[2]);

                        if (isNaN(value) || !isFinite(value))
                            value = null;
                        else if (dataType === 'int')
                            value = Math.floor(value);
                        break;
                }

                return value;
            }



            function appendBlankRow(dataTable, columns, count) {
                if (count == null)
                    count = 1;

                var rows = [];

                while (count-- > 0)
                    rows.push(createBlankData(columns));

                var rowsCount = dataTable.rows()[0].length;

                dataTable.rows.add(rows).draw();

                rows.forEach(function (row) {
                    $(dataTable.table().node()).trigger($.Event('xtable:new', { rowData: row, rowIndex: rowsCount++ }));
                });
            }

            function appendRow(dataTable, columns, rows) {
                if (!Array.isArray(rows))
                    rows = [rows];

                var rowsCount = dataTable.rows()[0].length;

                dataTable.rows.add(rows).draw();

                rows.forEach(function (row) {
                    $(dataTable.table().node()).trigger($.Event('xtable:new', { rowData: row, rowIndex: rowsCount++ }));
                });
            }

            function createBlankData(columns) {
                var line = {};

                columns.forEach(function (columnOptions) {
                    line[columnOptions.data] = null;
                });

                return line;
            }

            function pasteGrid(pastedText, $table, columnsOptions, rowIndex, colIndex) {
                var matrix = pastedText
                    .replace(/^[\n\r]+(?:\t+[\n\r$]+)*|[\n\r]+(?:\t+[\n\r$]+)*$/g, '') // trim start/end empty lines
                    .split(/[\n\r]+(?:\t+[\n\r$]+)*/) //split by one or more lines, discarding empty lines
                    .map(function (line) {
                        return line.split('\t');
                    });

                // before events
                $table.trigger($.Event('xtable:beforeMultUpdate'));
                var eBeforePaste = $.Event('xtable:beforePaste', {
                    rowIndex: rowIndex,
                    colIndex: colIndex,
                    pastedData: matrix
                });
                $table.trigger(eBeforePaste);

                if (eBeforePaste.isDefaultPrevented())
                    return;

                // slice matrix to columns count
                matrix = matrix
                    .map(function (line) {
                        return line.slice(0, columnsOptions.length - colIndex);
                    });

                var dt = $table.DataTable(),
                    rowsCount = dt.rows()[0].length;

                // append blank lines to new data, as needed
                if (rowsCount < (rowIndex + matrix.length))
                    appendBlankRow(dt, columnsOptions, rowIndex + matrix.length - rowsCount);

                // apply data
                matrix.forEach(function (line, y) {
                    line.forEach(function (value, x) {
                        var cellX = colIndex + x,
                            cellY = rowIndex + y;

                        if (columnsOptions[cellX].controlType) {
                            var $cellNode = $(dt.cell(cellY, cellX).node()),
                                editor = $cellNode.data('xtable:editor');

                            if (!editor)
                                return;

                            var rowData = dt.row(cellY).data(),
                                control = editor.element(),
                                $control = $(control);

                            editor.value(value);

                            // animate
                            $control.stop(false, true);

                            var originalBgColor = parseColor($control.css('backgroundColor')),
                                originalStyleColor = control.style.backgroundColor,
                                animColor = originalBgColor;

                            if (animColor[3] == 0)
                                animColor = [255, 255, 255, 0];

                            $control
                                .css({ backgroundColor: 'yellow' })
                                .animate({
                                    backgroundColor: 'rgba(' + animColor[0] + ',' + animColor[1] + ',' + animColor[2] + ',' + ([animColor[3] == null ? 1 : animColor[3]]) + ')'
                                }, {
                                    queue: false,
                                    duration: 1250,
                                    done: function () {
                                        control.style.backgroundColor = originalStyleColor;
                                    }
                                });
                        }
                    });
                });

                $table.trigger($.Event('xtable:multUpdate'));

                return true;
            }

            $.fn.dataTable = function (options) {
                var $table = this;
                if (options != null && options.columns != null && options.columns.any(function (x) { return x != null && !!x.controlType })) {

                    var columns = options.columns;

                    //// FOOTER
                    if (options.xTable && options.xTable.autoAppendRow) {
                        var tfoot = document.createElement('tfoot'),
                            tr = document.createElement('tr')
                        editors = [];

                        tr.bgColor = 'white';
                        tfoot.appendChild(tr);

                        $(tr).on('keydown', function (e) {
                            if (editors.length && e.which === 9) { //tab
                                var i = editors.indexOf(editors.first(function (x) { return x.focused() }));

                                if (i === -1)
                                    return;

                                i++;

                                if (i >= editors.length)
                                    i = 0;

                                editors[i].focus();

                                e.preventDefault();
                            }
                        });

                        columns.forEach(function (columnOptions, colIndex) {

                            var td = document.createElement('td');

                            if (columnOptions.controlType) {
                                // create editors
                                var editor = createEditor(columnOptions.controlType, columnOptions.controlOptions);

                                editors.push(editor);

                                editor
                                    .on('change', function (e) {
                                        if (e.value == null || e.value == '')
                                            return;

                                        var rowData = createBlankData(columns);
                                        rowData[columnOptions.data] = e.value;
                                        appendRow($table.DataTable(), columns, rowData);

                                        if (!editor.focused()) {
                                            editor.value(null);
                                            $(function () {
                                                editor.focus();
                                            });
                                        }
                                    })
                                    .on('paste', function (e) {
                                        e = e.originalEvent;
                                        var pastedText;
                                        if (e.clipboardData && e.clipboardData.getData) {
                                            pastedText = e.clipboardData.getData('text/plain');
                                        } else if (window.clipboardData && window.clipboardData.getData) { // IE
                                            pastedText = window.clipboardData.getData('Text');
                                        }

                                        if (pastedText.search(/\t|\r|\n/) === -1)
                                            return true;

                                        var rowIndex = $table.DataTable().rows()[0].length;

                                        if (pasteGrid(pastedText, $table, columns, rowIndex, colIndex)) {
                                            e.preventDefault();
                                            return false;
                                        }
                                    })
                                ;

                                td.appendChild(editor.element());
                                $(td).addClass('xTd');
                            }
                            tr.appendChild(td)
                        });

                        // TODO: otimizar
                        this.append(document.createElement('tbody'));
                        this.append(tfoot);
                    }

                    // config columns
                    columns.forEach(function (columnOptions) {
                        if (!columnOptions.controlType)
                            return;

                        var _createdCell = columnOptions.createdCell;
                        columnOptions.createdCell = function (cellElement, cellData, rowData, rowIndex, colIndex) {
                            var $cellElement = $(cellElement);

                            $cellElement.html('');

                            columnOptions.controlOptions = columnOptions.controlOptions || {};
                            var editor = createEditor(columnOptions.controlType, columnOptions.controlOptions);
                            $cellElement.data('xtable:editor', editor);

                            editor.value(rowData[columnOptions.data]);

                            editor
                                .on('change', function (e) {
                                    rowData[columnOptions.data] = e.value;

                                    $table.trigger($.Event('xtable:change', {
                                        rowIndex: rowIndex,
                                        colIndex: colIndex,
                                        rowData: rowData,
                                        editor: editor,
                                        originalValue: e.oldValue,
                                        value: e.value,
                                        property: columnOptions.data
                                    }));
                                })
                                .on('paste', function (e) {
                                    e = e.originalEvent;
                                    var pastedText;
                                    if (e.clipboardData && e.clipboardData.getData) {
                                        pastedText = e.clipboardData.getData('text/plain');
                                    } else if (window.clipboardData && window.clipboardData.getData) { // IE
                                        pastedText = window.clipboardData.getData('Text');
                                    }

                                    if (pastedText.search(/\t|\r|\n/) == -1)
                                        return true;

                                    if (pasteGrid(pastedText, $table, columns, rowIndex, colIndex)) {
                                        e.preventDefault();
                                        return false;
                                    }
                                })
                            ;

                            // TODO: paste

                            cellElement.appendChild(editor.element());
                            $cellElement.addClass('xTd');

                            if (_createdCell)
                                _createdCell.apply(this, Array.prototype.slice.call(arguments));
                        }
                    });

                    $(this).addClass('xTable');
                }

                return _dataTable.apply(this, arguments);
            }

            $.extend($.fn.dataTable, _dataTable);
            $.fn.dataTable.registerEditor = registerEditor;

        })();

        // Validator
        (function () {

            // datepicker
            var _date = $.validator.methods.date;
            $.validator.methods.date = function (value, element) {
                var $element = $(element);
                if ($element.data('datepicker'))
                    return this.optional(element) || !/Invalid|NaN/.test($element.datepicker('getDate').toString());
                else
                    _date.apply(this, arguments);
            };
        })();

        (function () {
            $.fn.scrollToError = function () {
                var elems = $(this).filter('form').toArray().reduce(function (arr, form) {
                    var $validator = $(form).validate();
                    arr.push.apply(arr, $validator.errorList.map(function (obj) {
                        return obj.element;
                    }));
                    return arr;
                }, []);

                //Logic
                var $elementMostTop;

                for (var i = 0; i < elems.length; i++) {
                    var $element = $(elems[i]),
                        $elementMostTop = $element,
                        offsetMostTop = $elementMostTop.offset(),
                        offsetElement = $element.offset();

                    if ($elementMostTop == null || (offsetMostTop.top > offsetElement.top) && (offsetMostTop.left > offsetElement.left))
                        $elementMostTop = $element;
                }

                if ($elementMostTop != null) {
                    $elementMostTop[0].scrollIntoView();
                    $elementMostTop[0].focus();
                }

                return this;
            }
        })();

        /*
         * Lets you say "at least X inputs that match selector Y must be filled."
         *
         * The end result is that neither of these inputs:
         *
         *	<input class="productinfo" name="partnumber">
         *	<input class="productinfo" name="description">
         *
         *	...will validate unless at least one of them is filled.
         *
         * partnumber:	{require_from_group: [1,".productinfo"]},
         * description: {require_from_group: [1,".productinfo"]}
         *
         * options[0]: number of fields that must be filled in the group
         * options[1]: CSS selector that defines the group of conditionally required fields
         */
        $.validator.addMethod("require_from_group", function (value, element, options) {
            var $fields = $(options[1], element.form),
                $fieldsFirst = $fields.eq(0),
                validator = $fieldsFirst.data("valid_req_grp") ? $fieldsFirst.data("valid_req_grp") : $.extend({}, this),
                isValid = $fields.filter(function () {
                    return validator.elementValue(this);
                }).length >= options[0];

            // Store the cloned validator for future validation
            $fieldsFirst.data("valid_req_grp", validator);

            // If element isn't being validated, run each require_from_group field's validation rules
            if (!$(element).data("being_validated")) {
                $fields.data("being_validated", true);
                $fields.each(function () {
                    validator.element(this);
                });
                $fields.data("being_validated", false);
            }
            return isValid;
        }, $.validator.format("Please fill at least {0} of these fields."));

    })(jQuery);

    // KNOCKOUT.JS
    (function (ko) {

        // retorna true para arrays observables.
        ko.isObservableArray = function (instance) {
            return ko.isObservable(instance) && instance.destroyAll !== undefined;
        }

        // ko.applyBindings auto
        var _applyBindings = ko.applyBindings, // applyBindings original
            autoInitialized,
            applyInfos = [],
            koApplyQueue = [];

        function ExecuteApplyQueue() {
            var arr = koApplyQueue;
            koApplyQueue = [];

            arr.forEach(function (el) {
                try {
                    ko.applyBindings(ko.dataFor(el), el, true);
                } catch (ex) { }
            });
        }

        function DOMNodeInserted(e) {
            var el = e.target;

            // tipos de nós sem suporte
            if (el.nodeType != Node.ELEMENT_NODE &&
                el.nodeType != Node.COMMENT_NODE)
                return;

            // obtêm o applyInfo do elemento ascendente mais próximo
            var applyInfo, rootNodeDescendance;
            applyInfos.forEach(function (info) {
                var descendance = el.getDescendanceLevel(info.rootNode);

                if (descendance && (!applyInfo || descendance < rootNodeDescendance)) {
                    applyInfo = info;
                    rootNodeDescendance = descendance;
                }
            });

            // se não houver ascendente ou o binding do ascendente
            // mais próximo não é automático
            if (!applyInfo || !applyInfo.auto)
                return;

            koApplyQueue.push(el);

            if (koApplyQueue.length > 1)
                return;

            setTimeout(ExecuteApplyQueue, 0);
        }

        ko.applyBindings = function (viewModelOrBindingContext, rootNode, auto) {
            rootNode = rootNode || document.body;

            // carrega as informações do apply em applyInfo

            var applyInfo, hasParentApply;
            applyInfos.forEach(function (info) {
                if (!applyInfo && info.rootNode === rootNode) {
                    info.context = viewModelOrBindingContext;
                    info.auto = auto;
                    applyInfo = info;
                }

                if (!hasParentApply && rootNode.isDescendantOf(info.rootNode))
                    hasParentApply = true;
            });

            if (applyInfo) {
                ko.cleanNode(rootNode);
                applyInfo.context = viewModelOrBindingContext;
                applyInfo.auto = auto;
            } else {
                if (hasParentApply)
                    ko.cleanNode(rootNode);

                applyInfo = {
                    context: viewModelOrBindingContext,
                    rootNode: rootNode,
                    auto: auto
                };
                applyInfos.push(applyInfo);
            }

            // chama o applyBindings origina

            _applyBindings.call(ko, viewModelOrBindingContext, rootNode);

            // faz a escuta no DOM uma única vez
            if (autoInitialized || !auto)
                return;
            autoInitialized = true;

            document.addEventListener('DOMNodeInserted', DOMNodeInserted);
        }
    })(ko);

    // customs.js
    (function () {

        // LoadScreen

        var loadLevel = 0;

        root.PushLoad = function PushLoad() {
            if (!loadLevel)
                LoadScreen();
            loadLevel++;
        }

        root.PopLoad = function PopLoad() {
            if (loadLevel) {
                loadLevel--;

                if (!loadLevel)
                    CloseLoad();
            }
        }

        var _closeLoad = CloseLoad;
        root.CloseLoad = function CloseLoad() {
            _closeLoad.call(this);
            loadLevel = 0;
        }

        // app.callMsg
        asd = app.callMsg;
        var _callMsg = app.callMsg,
            _app_callMsg_Confirmacao = { counter: 0 };

        window['app_callMsg_Confirmacao'] = function (argName) {
            args = _app_callMsg_Confirmacao[argName];

            if (args.arrayParam !== undefined) {
                if (args.arrayParam.split) {
                    args.fnc.apply(window, args.arrayParam.split(','));
                } else {
                    args.fnc.call(window, args.arrayParam);
                }
            } else {
                args.fnc.call(window);
            }

            delete _app_callMsg_Confirmacao[argName];
        }

        app.callMsg = function callMsg(msg, type, fnc, arrayParam) {
            var app = this,
                args = Array.prototype.slice.call(arguments);

            // msg == [msg ...]
            if (Array.isArray(msg)) {
                msg.forEach(function (msg) {
                    args[0] = msg;
                    callMsg.apply(app, args);
                });
                return;
            }

            // msg == { descricao: string[, tipo: string] }
            if (typeof (msg) != 'string' && 'descricao' in msg) {
                args[0] = msg.descricao;
                args[1] = msg.tipo || type;
                return callMsg.apply(app, args);
            }

            // msg == { ok: boolean, msg: msg }
            if (typeof msg.ok == 'boolean' && 'msg' in msg) {
                args[0] = msg.msg;
                return callMsg.apply(app, args);
            }

            // fns == function
            if (typeof fnc == 'function') {
                var argName = '_' + _app_callMsg_Confirmacao.counter++;
                _app_callMsg_Confirmacao[argName] = { fnc: fnc, arrayParam: arrayParam }

                args[2] = 'app_callMsg_Confirmacao';
                args[3] = argName;
            }

            return _callMsg.apply(app, args);
        }

        var _createMessage = function (descricao, tipo) {
            return {
                descricao: descricao,
                tipo: tipo
            };
        }

        var _createMessageByObject = function (obj) {
            if (typeof obj.ok == 'boolean' && 'msg' in obj)
                obj = obj.msg;

            if (typeof obj.descricao == 'string' && typeof obj.tipo == 'string')
                return _createMessage(obj.descricao, obj.tipo);

            if (typeof obj.Descricao == 'string' && typeof obj.Tipo == 'number') {
                var type = "Erro";
                switch (obj.Tipo) {
                    case 1: type = "Alerta"; break;
                    case 2: type = "Confirmacao"; break;
                    case 3: type = "Sucesso"; break;
                    case 4: type = "Informacao"; break;
                }

                return _createMessage(obj.Descricao, type);
            }

            throw _createMessageByObject;
        }

        app.createMessage = function (msg) {
            var args = arguments;

            // args == array(string, string)
            if (typeof msg == 'string' && typeof args[1] == 'string') {
                msg = _createMessage(args[0], args[1]);

                // args = array( array( msg... )[, string] ) )
            } else if (Array.isArray(msg)) {
                if (msg.length == 0)
                    throw app.createMessage;

                // converte todos os itens para Mensagem
                msg = msg.map(function (item) {
                    if (typeof item == 'string' && typeof args[1] == 'string')
                        return _createMessage(item, args[1])
                    else
                        return _createMessageByObject(item);
                });

                // Valida o tipo de todas as mensagens
                if (!(
                    msg.all(function (x) {
                        return x.tipo == 'Sucesso'
                            || x.tipo == 'Confirmacao'
                })
                    ||
                    msg.all(function (x) {
                        return x.tipo != 'Sucesso'
                            && x.tipo != 'Confirmacao'
                })
                ))
                    throw app.createMessage;

                // msg == { ok: boolean, msg: msg }
            } else if (typeof msg.ok == 'boolean' && 'msg' in msg) {
                return app.createMessage(msg.msg);
            }

            // Message = { descricao: string[, tipo: string] }
            // msg = Message | array( Message... )

            return Array.isArray(msg)
                ? {
                    ok: (msg[0].tipo == 'Sucesso' || msg[0].tipo == 'Confirmacao')
                    ,
                    msg: msg
                }

                : {
                    ok: (msg.tipo == 'Sucesso' || msg.tipo == 'Confirmacao')
                    ,
                    msg: msg
                }
        }

        app.ajaxError = function (xhr) {
            var hMessageType = xhr.getResponseHeader('ANEEL-Exception') || 'Erro',
                hMessage = xhr.getResponseHeader('ANEEL-Exception-Message') || 'Erro indefinido!',
                hException = xhr.getResponseHeader('ANEEL-Exception-Type'),
                msg = app.createMessage(decodeURIComponent(escape(hMessage)), decodeURIComponent(escape(hMessageType)));

            switch (xhr.status) {
                case 0: // Falha na conexão
                    msg = app.createMessage('Falha na conexão.', hMessageType);
                    break;
                case 500: // Erro inesperado
                    if (xhr.responseJSON != undefined)
                        msg = app.createMessage(xhr.responseJSON);
                    break;
            }

            app.callMsg(msg);
        }

    })();
})(this.window, this.window, this.window.document);