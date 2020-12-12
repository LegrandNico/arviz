(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("719247f8-4c9a-4958-a2fe-6e53ac0fcd44");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '719247f8-4c9a-4958-a2fe-6e53ac0fcd44' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"63e583cc-5aaf-4211-9332-ba24f7c94b6e":{"roots":{"references":[{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90756","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90759","type":"Span"},{"attributes":{},"id":"90656","type":"PanTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90755","type":"VBar"},{"attributes":{},"id":"90645","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90789"},"selection_policy":{"id":"90790"}},"id":"90754","type":"ColumnDataSource"},{"attributes":{"text":"tau"},"id":"90734","type":"Title"},{"attributes":{},"id":"90643","type":"LinearScale"},{"attributes":{"source":{"id":"90754"}},"id":"90758","type":"CDSView"},{"attributes":{},"id":"90783","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90698","type":"PolyAnnotation"},{"attributes":{},"id":"90784","type":"UnionRenderers"},{"attributes":{},"id":"90774","type":"Selection"},{"attributes":{"data_source":{"id":"90754"},"glyph":{"id":"90755"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90756"},"selection_glyph":null,"view":{"id":"90758"}},"id":"90757","type":"GlyphRenderer"},{"attributes":{},"id":"90679","type":"LinearScale"},{"attributes":{},"id":"90775","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90765"},"ticker":{"id":"90732"}},"id":"90651","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90663","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90664","type":"PolyAnnotation"},{"attributes":{},"id":"90785","type":"Selection"},{"attributes":{},"id":"90786","type":"UnionRenderers"},{"attributes":{},"id":"90767","type":"BasicTickFormatter"},{"attributes":{},"id":"90639","type":"DataRange1d"},{"attributes":{},"id":"90641","type":"DataRange1d"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90768"},"selection_policy":{"id":"90769"}},"id":"90708","type":"ColumnDataSource"},{"attributes":{},"id":"90787","type":"Selection"},{"attributes":{"source":{"id":"90748"}},"id":"90752","type":"CDSView"},{"attributes":{"data_source":{"id":"90708"},"glyph":{"id":"90709"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90710"},"selection_glyph":null,"view":{"id":"90712"}},"id":"90711","type":"GlyphRenderer"},{"attributes":{},"id":"90788","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90710","type":"VBar"},{"attributes":{"children":[[{"id":"90638"},0,0],[{"id":"90674"},0,1]]},"id":"90794","type":"GridBox"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90716","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90719","type":"Span"},{"attributes":{"source":{"id":"90708"}},"id":"90712","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90770"},"selection_policy":{"id":"90771"}},"id":"90714","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90715","type":"VBar"},{"attributes":{},"id":"90677","type":"LinearScale"},{"attributes":{"source":{"id":"90714"}},"id":"90718","type":"CDSView"},{"attributes":{},"id":"90772","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90722","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90725","type":"Span"},{"attributes":{"axis":{"id":"90681"},"ticker":null},"id":"90684","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90721","type":"VBar"},{"attributes":{},"id":"90789","type":"Selection"},{"attributes":{"callback":null},"id":"90696","type":"HoverTool"},{"attributes":{"data_source":{"id":"90714"},"glyph":{"id":"90715"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90716"},"selection_glyph":null,"view":{"id":"90718"}},"id":"90717","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90655"},{"id":"90656"},{"id":"90657"},{"id":"90658"},{"id":"90659"},{"id":"90660"},{"id":"90661"},{"id":"90662"}]},"id":"90665","type":"Toolbar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90780"},"ticker":{"id":"90760"}},"id":"90685","type":"LinearAxis"},{"attributes":{},"id":"90790","type":"UnionRenderers"},{"attributes":{},"id":"90658","type":"WheelZoomTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90782"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90682"}},"id":"90681","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90772"},"selection_policy":{"id":"90773"}},"id":"90720","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90720"}},"id":"90724","type":"CDSView"},{"attributes":{},"id":"90780","type":"BasicTickFormatter"},{"attributes":{},"id":"90682","type":"BasicTicker"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90728","type":"VBar"},{"attributes":{"axis":{"id":"90651"},"dimension":1,"ticker":null},"id":"90654","type":"Grid"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90731","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90727","type":"VBar"},{"attributes":{"data_source":{"id":"90720"},"glyph":{"id":"90721"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90722"},"selection_glyph":null,"view":{"id":"90724"}},"id":"90723","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"90685"},"dimension":1,"ticker":null},"id":"90688","type":"Grid"},{"attributes":{"toolbars":[{"id":"90665"},{"id":"90699"}],"tools":[{"id":"90655"},{"id":"90656"},{"id":"90657"},{"id":"90658"},{"id":"90659"},{"id":"90660"},{"id":"90661"},{"id":"90662"},{"id":"90689"},{"id":"90690"},{"id":"90691"},{"id":"90692"},{"id":"90693"},{"id":"90694"},{"id":"90695"},{"id":"90696"}]},"id":"90795","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"90662","type":"HoverTool"},{"attributes":{},"id":"90768","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90709","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90774"},"selection_policy":{"id":"90775"}},"id":"90726","type":"ColumnDataSource"},{"attributes":{},"id":"90769","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"90697"}},"id":"90691","type":"BoxZoomTool"},{"attributes":{"source":{"id":"90726"}},"id":"90730","type":"CDSView"},{"attributes":{},"id":"90690","type":"PanTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"90760","type":"FixedTicker"},{"attributes":{},"id":"90660","type":"UndoTool"},{"attributes":{},"id":"90689","type":"ResetTool"},{"attributes":{"data_source":{"id":"90736"},"glyph":{"id":"90737"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90738"},"selection_glyph":null,"view":{"id":"90740"}},"id":"90739","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"90732","type":"FixedTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90738","type":"VBar"},{"attributes":{},"id":"90661","type":"SaveTool"},{"attributes":{"overlay":{"id":"90663"}},"id":"90657","type":"BoxZoomTool"},{"attributes":{},"id":"90695","type":"SaveTool"},{"attributes":{"data_source":{"id":"90726"},"glyph":{"id":"90727"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90728"},"selection_glyph":null,"view":{"id":"90730"}},"id":"90729","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"90647"}],"center":[{"id":"90650"},{"id":"90654"},{"id":"90713"},{"id":"90719"},{"id":"90725"},{"id":"90731"}],"left":[{"id":"90651"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90711"},{"id":"90717"},{"id":"90723"},{"id":"90729"}],"title":{"id":"90734"},"toolbar":{"id":"90665"},"toolbar_location":null,"x_range":{"id":"90639"},"x_scale":{"id":"90643"},"y_range":{"id":"90641"},"y_scale":{"id":"90645"}},"id":"90638","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90692","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"90698"}},"id":"90693","type":"LassoSelectTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90713","type":"Span"},{"attributes":{},"id":"90782","type":"BasicTickFormatter"},{"attributes":{},"id":"90694","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90783"},"selection_policy":{"id":"90784"}},"id":"90736","type":"ColumnDataSource"},{"attributes":{},"id":"90773","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90689"},{"id":"90690"},{"id":"90691"},{"id":"90692"},{"id":"90693"},{"id":"90694"},{"id":"90695"},{"id":"90696"}]},"id":"90699","type":"Toolbar"},{"attributes":{"below":[{"id":"90681"}],"center":[{"id":"90684"},{"id":"90688"},{"id":"90741"},{"id":"90747"},{"id":"90753"},{"id":"90759"}],"left":[{"id":"90685"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90739"},{"id":"90745"},{"id":"90751"},{"id":"90757"}],"title":{"id":"90762"},"toolbar":{"id":"90699"},"toolbar_location":null,"x_range":{"id":"90639"},"x_scale":{"id":"90677"},"y_range":{"id":"90641"},"y_scale":{"id":"90679"}},"id":"90674","subtype":"Figure","type":"Plot"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90741","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90737","type":"VBar"},{"attributes":{},"id":"90770","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90767"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90648"}},"id":"90647","type":"LinearAxis"},{"attributes":{},"id":"90771","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90744","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90747","type":"Span"},{"attributes":{"source":{"id":"90736"}},"id":"90740","type":"CDSView"},{"attributes":{"toolbar":{"id":"90795"},"toolbar_location":"above"},"id":"90796","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90785"},"selection_policy":{"id":"90786"}},"id":"90742","type":"ColumnDataSource"},{"attributes":{},"id":"90655","type":"ResetTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90743","type":"VBar"},{"attributes":{"data_source":{"id":"90748"},"glyph":{"id":"90749"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90750"},"selection_glyph":null,"view":{"id":"90752"}},"id":"90751","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"90664"}},"id":"90659","type":"LassoSelectTool"},{"attributes":{"source":{"id":"90742"}},"id":"90746","type":"CDSView"},{"attributes":{"text":"mu"},"id":"90762","type":"Title"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90750","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90753","type":"Span"},{"attributes":{},"id":"90765","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90749","type":"VBar"},{"attributes":{"data_source":{"id":"90742"},"glyph":{"id":"90743"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90744"},"selection_glyph":null,"view":{"id":"90746"}},"id":"90745","type":"GlyphRenderer"},{"attributes":{},"id":"90648","type":"BasicTicker"},{"attributes":{"children":[{"id":"90796"},{"id":"90794"}]},"id":"90797","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90697","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90787"},"selection_policy":{"id":"90788"}},"id":"90748","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"90647"},"ticker":null},"id":"90650","type":"Grid"}],"root_ids":["90797"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"63e583cc-5aaf-4211-9332-ba24f7c94b6e","root_ids":["90797"],"roots":{"90797":"719247f8-4c9a-4958-a2fe-6e53ac0fcd44"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();