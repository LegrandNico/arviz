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
    
      
      
    
      var element = document.getElementById("d666f0e2-9db1-4b4d-ab40-9b509af6f791");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd666f0e2-9db1-4b4d-ab40-9b509af6f791' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3429a58b-2124-4f0a-8fef-8f532adfb16d":{"roots":{"references":[{"attributes":{"callback":null},"id":"67885","type":"HoverTool"},{"attributes":{},"id":"67883","type":"UndoTool"},{"attributes":{"toolbar":{"id":"67914"},"toolbar_location":"above"},"id":"67915","type":"ToolbarBox"},{"attributes":{},"id":"67907","type":"BasicTickFormatter"},{"attributes":{},"id":"67864","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67878"},{"id":"67879"},{"id":"67880"},{"id":"67881"},{"id":"67882"},{"id":"67883"},{"id":"67884"},{"id":"67885"}]},"id":"67888","type":"Toolbar"},{"attributes":{"overlay":{"id":"67887"}},"id":"67882","type":"LassoSelectTool"},{"attributes":{},"id":"67879","type":"PanTool"},{"attributes":{},"id":"67878","type":"ResetTool"},{"attributes":{},"id":"67868","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"67888"}],"tools":[{"id":"67878"},{"id":"67879"},{"id":"67880"},{"id":"67881"},{"id":"67882"},{"id":"67883"},{"id":"67884"},{"id":"67885"}]},"id":"67914","type":"ProxyToolbar"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67897","type":"Cross"},{"attributes":{"children":[{"id":"67915"},{"id":"67913"}]},"id":"67916","type":"Column"},{"attributes":{},"id":"67881","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"67907"},"ticker":{"id":"67871"}},"id":"67870","type":"LinearAxis"},{"attributes":{},"id":"67875","type":"BasicTicker"},{"attributes":{"axis":{"id":"67874"},"dimension":1,"ticker":null},"id":"67877","type":"Grid"},{"attributes":{"overlay":{"id":"67886"}},"id":"67880","type":"BoxZoomTool"},{"attributes":{"source":{"id":"67898"}},"id":"67900","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67887","type":"PolyAnnotation"},{"attributes":{},"id":"67871","type":"BasicTicker"},{"attributes":{"axis":{"id":"67870"},"ticker":null},"id":"67873","type":"Grid"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67901","type":"Title"},{"attributes":{"below":[{"id":"67870"}],"center":[{"id":"67873"},{"id":"67877"}],"left":[{"id":"67874"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67899"}],"title":{"id":"67901"},"toolbar":{"id":"67888"},"toolbar_location":null,"x_range":{"id":"67862"},"x_scale":{"id":"67866"},"y_range":{"id":"67864"},"y_scale":{"id":"67868"}},"id":"67861","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67886","type":"BoxAnnotation"},{"attributes":{},"id":"67908","type":"Selection"},{"attributes":{},"id":"67905","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"67898"},"glyph":{"id":"67897"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67900"}},"id":"67899","type":"GlyphRenderer"},{"attributes":{},"id":"67884","type":"SaveTool"},{"attributes":{},"id":"67862","type":"DataRange1d"},{"attributes":{},"id":"67866","type":"LinearScale"},{"attributes":{"children":[[{"id":"67861"},0,0]]},"id":"67913","type":"GridBox"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67908"},"selection_policy":{"id":"67909"}},"id":"67898","type":"ColumnDataSource"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67905"},"ticker":{"id":"67875"}},"id":"67874","type":"LinearAxis"},{"attributes":{},"id":"67909","type":"UnionRenderers"}],"root_ids":["67916"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3429a58b-2124-4f0a-8fef-8f532adfb16d","root_ids":["67916"],"roots":{"67916":"d666f0e2-9db1-4b4d-ab40-9b509af6f791"}}];
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