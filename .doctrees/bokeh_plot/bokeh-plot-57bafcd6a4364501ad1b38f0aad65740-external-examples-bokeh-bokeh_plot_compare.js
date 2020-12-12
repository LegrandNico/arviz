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
    
      
      
    
      var element = document.getElementById("a6a89f5a-932a-4d63-b0d9-45df26ae18ef");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a6a89f5a-932a-4d63-b0d9-45df26ae18ef' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1d51e8ba-4b73-4b28-9a7c-9b327a971677":{"roots":{"references":[{"attributes":{},"id":"65676","type":"DataRange1d"},{"attributes":{"callback":null},"id":"65699","type":"HoverTool"},{"attributes":{"source":{"id":"65718"}},"id":"65722","type":"CDSView"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65738","type":"Span"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65724","type":"Circle"},{"attributes":{},"id":"65695","type":"WheelZoomTool"},{"attributes":{},"id":"65741","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"65713"}},"id":"65717","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65715","type":"Triangle"},{"attributes":{"axis_label":"Log","formatter":{"id":"65743"},"ticker":{"id":"65685"}},"id":"65684","type":"LinearAxis"},{"attributes":{},"id":"65752","type":"Selection"},{"attributes":{"below":[{"id":"65684"}],"center":[{"id":"65687"},{"id":"65691"}],"left":[{"id":"65688"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65716"},{"id":"65721"},{"id":"65726"},{"id":"65731"},{"id":"65736"},{"id":"65738"}],"title":{"id":"65739"},"toolbar":{"id":"65702"},"toolbar_location":null,"x_range":{"id":"65676"},"x_scale":{"id":"65680"},"y_range":{"id":"65678"},"y_scale":{"id":"65682"}},"id":"65675","subtype":"Figure","type":"Plot"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65729","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65735","type":"Circle"},{"attributes":{},"id":"65745","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65692"},{"id":"65693"},{"id":"65694"},{"id":"65695"},{"id":"65696"},{"id":"65697"},{"id":"65698"},{"id":"65699"}]},"id":"65702","type":"Toolbar"},{"attributes":{},"id":"65749","type":"UnionRenderers"},{"attributes":{},"id":"65698","type":"SaveTool"},{"attributes":{"overlay":{"id":"65701"}},"id":"65696","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"65723"},"glyph":{"id":"65724"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65725"},"selection_glyph":null,"view":{"id":"65727"}},"id":"65726","type":"GlyphRenderer"},{"attributes":{},"id":"65746","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65725","type":"Circle"},{"attributes":{"axis":{"id":"65688"},"dimension":1,"ticker":null},"id":"65691","type":"Grid"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65719","type":"MultiLine"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65711","type":"FixedTicker"},{"attributes":{"axis":{"id":"65684"},"ticker":null},"id":"65687","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65701","type":"PolyAnnotation"},{"attributes":{},"id":"65693","type":"PanTool"},{"attributes":{},"id":"65748","type":"Selection"},{"attributes":{},"id":"65747","type":"UnionRenderers"},{"attributes":{"children":[{"id":"65759"},{"id":"65757"}]},"id":"65760","type":"Column"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65734","type":"Circle"},{"attributes":{"data_source":{"id":"65733"},"glyph":{"id":"65734"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65735"},"selection_glyph":null,"view":{"id":"65737"}},"id":"65736","type":"GlyphRenderer"},{"attributes":{},"id":"65680","type":"LinearScale"},{"attributes":{},"id":"65692","type":"ResetTool"},{"attributes":{},"id":"65685","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"65702"}],"tools":[{"id":"65692"},{"id":"65693"},{"id":"65694"},{"id":"65695"},{"id":"65696"},{"id":"65697"},{"id":"65698"},{"id":"65699"}]},"id":"65758","type":"ProxyToolbar"},{"attributes":{},"id":"65682","type":"LinearScale"},{"attributes":{"data":{"x":[-29.8454020018613,-29.85632121495365],"y":[0.0,-1.0]},"selected":{"id":"65752"},"selection_policy":{"id":"65753"}},"id":"65733","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"65739","type":"Title"},{"attributes":{"data_source":{"id":"65718"},"glyph":{"id":"65719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65720"},"selection_glyph":null,"view":{"id":"65722"}},"id":"65721","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65700","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"65700"}},"id":"65694","type":"BoxZoomTool"},{"attributes":{},"id":"65750","type":"Selection"},{"attributes":{"children":[[{"id":"65675"},0,0]]},"id":"65757","type":"GridBox"},{"attributes":{},"id":"65744","type":"Selection"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"65748"},"selection_policy":{"id":"65749"}},"id":"65723","type":"ColumnDataSource"},{"attributes":{"end":0.5,"start":-1.5},"id":"65678","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65714","type":"Triangle"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65746"},"selection_policy":{"id":"65747"}},"id":"65718","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65750"},"selection_policy":{"id":"65751"}},"id":"65728","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"65758"},"toolbar_location":"above"},"id":"65759","type":"ToolbarBox"},{"attributes":{"source":{"id":"65723"}},"id":"65727","type":"CDSView"},{"attributes":{"source":{"id":"65728"}},"id":"65732","type":"CDSView"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"65744"},"selection_policy":{"id":"65745"}},"id":"65713","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"65741"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65711"}},"id":"65688","type":"LinearAxis"},{"attributes":{"data_source":{"id":"65713"},"glyph":{"id":"65714"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65715"},"selection_glyph":null,"view":{"id":"65717"}},"id":"65716","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65730","type":"MultiLine"},{"attributes":{"data_source":{"id":"65728"},"glyph":{"id":"65729"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65730"},"selection_glyph":null,"view":{"id":"65732"}},"id":"65731","type":"GlyphRenderer"},{"attributes":{},"id":"65751","type":"UnionRenderers"},{"attributes":{},"id":"65743","type":"BasicTickFormatter"},{"attributes":{},"id":"65753","type":"UnionRenderers"},{"attributes":{"source":{"id":"65733"}},"id":"65737","type":"CDSView"},{"attributes":{},"id":"65697","type":"UndoTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65720","type":"MultiLine"}],"root_ids":["65760"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1d51e8ba-4b73-4b28-9a7c-9b327a971677","root_ids":["65760"],"roots":{"65760":"a6a89f5a-932a-4d63-b0d9-45df26ae18ef"}}];
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