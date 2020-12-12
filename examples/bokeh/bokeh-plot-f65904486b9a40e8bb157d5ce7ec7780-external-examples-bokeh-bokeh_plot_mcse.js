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
    
      
      
    
      var element = document.getElementById("3856bbc6-4057-4246-a5d4-4f0281d7e5d9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3856bbc6-4057-4246-a5d4-4f0281d7e5d9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e8862353-7cfc-4175-bf3d-a46ab0a879ff":{"roots":{"references":[{"attributes":{"below":[{"id":"85800"}],"center":[{"id":"85803"},{"id":"85807"}],"left":[{"id":"85804"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85866"},{"id":"85868"},{"id":"85869"},{"id":"85870"},{"id":"85873"}],"title":{"id":"85875"},"toolbar":{"id":"85818"},"toolbar_location":null,"x_range":{"id":"85792"},"x_scale":{"id":"85796"},"y_range":{"id":"85794"},"y_scale":{"id":"85798"}},"id":"85791","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"85895","type":"BasicTickFormatter"},{"attributes":{},"id":"85908","type":"Selection"},{"attributes":{},"id":"85909","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85816","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85853","type":"PolyAnnotation"},{"attributes":{},"id":"85910","type":"Selection"},{"attributes":{},"id":"85911","type":"UnionRenderers"},{"attributes":{},"id":"85896","type":"Selection"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85898"},"selection_policy":{"id":"85899"}},"id":"85872","type":"ColumnDataSource"},{"attributes":{},"id":"85897","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85817","type":"PolyAnnotation"},{"attributes":{"source":{"id":"85863"}},"id":"85867","type":"CDSView"},{"attributes":{"source":{"id":"85872"}},"id":"85874","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85871","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"85868","type":"Span"},{"attributes":{"children":[[{"id":"85791"},0,0],[{"id":"85827"},0,1]]},"id":"85915","type":"GridBox"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"85869","type":"Span"},{"attributes":{"data_source":{"id":"85872"},"glyph":{"id":"85871"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85874"}},"id":"85873","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"85875","type":"Title"},{"attributes":{"source":{"id":"85886"}},"id":"85888","type":"CDSView"},{"attributes":{},"id":"85898","type":"Selection"},{"attributes":{},"id":"85899","type":"UnionRenderers"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85870","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85910"},"selection_policy":{"id":"85911"}},"id":"85886","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85879","type":"Circle"},{"attributes":{"children":[{"id":"85917"},{"id":"85915"}]},"id":"85918","type":"Column"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85878","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85908"},"selection_policy":{"id":"85909"}},"id":"85877","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85877"}},"id":"85881","type":"CDSView"},{"attributes":{"data_source":{"id":"85877"},"glyph":{"id":"85878"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85879"},"selection_glyph":null,"view":{"id":"85881"}},"id":"85880","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"85818"},{"id":"85854"}],"tools":[{"id":"85808"},{"id":"85809"},{"id":"85810"},{"id":"85811"},{"id":"85812"},{"id":"85813"},{"id":"85814"},{"id":"85815"},{"id":"85844"},{"id":"85845"},{"id":"85846"},{"id":"85847"},{"id":"85848"},{"id":"85849"},{"id":"85850"},{"id":"85851"}]},"id":"85916","type":"ProxyToolbar"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85885","type":"Dash"},{"attributes":{"data_source":{"id":"85863"},"glyph":{"id":"85864"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85865"},"selection_glyph":null,"view":{"id":"85867"}},"id":"85866","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"85882","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85864","type":"Circle"},{"attributes":{"below":[{"id":"85836"}],"center":[{"id":"85839"},{"id":"85843"}],"left":[{"id":"85840"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85880"},{"id":"85882"},{"id":"85883"},{"id":"85884"},{"id":"85887"}],"title":{"id":"85889"},"toolbar":{"id":"85854"},"toolbar_location":null,"x_range":{"id":"85828"},"x_scale":{"id":"85832"},"y_range":{"id":"85830"},"y_scale":{"id":"85834"}},"id":"85827","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"85883","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85907"},"ticker":{"id":"85837"}},"id":"85836","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"85830","type":"DataRange1d"},{"attributes":{"data_source":{"id":"85886"},"glyph":{"id":"85885"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85888"}},"id":"85887","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85893"},"ticker":{"id":"85805"}},"id":"85804","type":"LinearAxis"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85905"},"ticker":{"id":"85841"}},"id":"85840","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"85889","type":"Title"},{"attributes":{},"id":"85832","type":"LinearScale"},{"attributes":{},"id":"85834","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85896"},"selection_policy":{"id":"85897"}},"id":"85863","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"85851","type":"HoverTool"},{"attributes":{},"id":"85792","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85884","type":"Span"},{"attributes":{},"id":"85837","type":"BasicTicker"},{"attributes":{"end":1,"start":-0.05},"id":"85794","type":"DataRange1d"},{"attributes":{"axis":{"id":"85836"},"ticker":null},"id":"85839","type":"Grid"},{"attributes":{},"id":"85798","type":"LinearScale"},{"attributes":{"toolbar":{"id":"85916"},"toolbar_location":"above"},"id":"85917","type":"ToolbarBox"},{"attributes":{},"id":"85796","type":"LinearScale"},{"attributes":{"axis":{"id":"85804"},"dimension":1,"ticker":null},"id":"85807","type":"Grid"},{"attributes":{"axis":{"id":"85840"},"dimension":1,"ticker":null},"id":"85843","type":"Grid"},{"attributes":{},"id":"85841","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85895"},"ticker":{"id":"85801"}},"id":"85800","type":"LinearAxis"},{"attributes":{"callback":null},"id":"85815","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85865","type":"Circle"},{"attributes":{},"id":"85905","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"85852"}},"id":"85846","type":"BoxZoomTool"},{"attributes":{},"id":"85809","type":"PanTool"},{"attributes":{},"id":"85845","type":"PanTool"},{"attributes":{},"id":"85801","type":"BasicTicker"},{"attributes":{},"id":"85844","type":"ResetTool"},{"attributes":{},"id":"85850","type":"SaveTool"},{"attributes":{},"id":"85893","type":"BasicTickFormatter"},{"attributes":{},"id":"85847","type":"WheelZoomTool"},{"attributes":{},"id":"85805","type":"BasicTicker"},{"attributes":{"overlay":{"id":"85853"}},"id":"85848","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"85800"},"ticker":null},"id":"85803","type":"Grid"},{"attributes":{},"id":"85849","type":"UndoTool"},{"attributes":{},"id":"85828","type":"DataRange1d"},{"attributes":{"overlay":{"id":"85816"}},"id":"85810","type":"BoxZoomTool"},{"attributes":{},"id":"85814","type":"SaveTool"},{"attributes":{},"id":"85808","type":"ResetTool"},{"attributes":{},"id":"85907","type":"BasicTickFormatter"},{"attributes":{},"id":"85811","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85808"},{"id":"85809"},{"id":"85810"},{"id":"85811"},{"id":"85812"},{"id":"85813"},{"id":"85814"},{"id":"85815"}]},"id":"85818","type":"Toolbar"},{"attributes":{"overlay":{"id":"85817"}},"id":"85812","type":"LassoSelectTool"},{"attributes":{},"id":"85813","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85852","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85844"},{"id":"85845"},{"id":"85846"},{"id":"85847"},{"id":"85848"},{"id":"85849"},{"id":"85850"},{"id":"85851"}]},"id":"85854","type":"Toolbar"}],"root_ids":["85918"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e8862353-7cfc-4175-bf3d-a46ab0a879ff","root_ids":["85918"],"roots":{"85918":"3856bbc6-4057-4246-a5d4-4f0281d7e5d9"}}];
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