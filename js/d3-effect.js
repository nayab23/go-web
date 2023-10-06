/* https://github.com/d3/d3-plugins/tree/master/hexbin Copyright 2013 Michael Bostock. */
!function(){d3.hexbin=function(){function u(n){var r={};return n.forEach(function(n,t){var a=s.call(u,n,t)/o,e=Math.round(a),c=h.call(u,n,t)/i-(1&e?.5:0),f=Math.round(c),l=a-e;if(3*Math.abs(l)>1){var v=c-f,g=f+(f>c?-1:1)/2,m=e+(e>a?-1:1),M=c-g,d=a-m;v*v+l*l>M*M+d*d&&(f=g+(1&e?1:-1)/2,e=m)}var j=f+"-"+e,p=r[j];p?p.push(n):(p=r[j]=[n],p.i=f,p.j=e,p.x=(f+(1&e?.5:0))*i,p.y=e*o)}),d3.values(r)}function a(r){var t=0,u=0;return n.map(function(n){var a=Math.sin(n)*r,e=-Math.cos(n)*r,i=a-t,o=e-u;return t=a,u=e,[i,o]})}var e,i,o,c=1,f=1,h=r,s=t;return u.x=function(n){return arguments.length?(h=n,u):h},u.y=function(n){return arguments.length?(s=n,u):s},u.hexagon=function(n){return arguments.length<1&&(n=e),"m"+a(n).join("l")+"z"},u.centers=function(){for(var n=[],r=0,t=!1,u=0;f+e>r;r+=o,t=!t,++u)for(var a=t?i/2:0,h=0;c+i/2>a;a+=i,++h){var s=[a,r];s.i=h,s.j=u,n.push(s)}return n},u.mesh=function(){var n=a(e).slice(0,4).join("l");return u.centers().map(function(r){return"M"+r+"m"+n}).join("")},u.size=function(n){return arguments.length?(c=+n[0],f=+n[1],u):[c,f]},u.radius=function(n){return arguments.length?(e=+n,i=2*e*Math.sin(Math.PI/3),o=1.5*e,u):e},u.radius(1)};var n=d3.range(0,2*Math.PI,Math.PI/3),r=function(n){return n[0]},t=function(n){return n[1]}}();

/* https://github.com/davidbau/seedrandom Copyright 2013 David Bau. */
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return a.crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=c.pow(d,e),h=c.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],Math,256,6,52);


$(window).on('load', function () {
        var data = [
            //Line1
            {title: "Amcharts", url: "javascript:void(0)"},
            {title: "AngularJs", url: "javascript:void(0)"},
            {title: "Aws", url: "javascript:void(0)"},
            {title: "Babel", url: "javascript:void(0)"},
            {title: "Bitbucket", url: "javascript:void(0)"},
            {title: "Bootstrap", url: "javascript:void(0)"},
            {title: "CakePHP", url: "javascript:void(0)"},
            {title: "ChartJs", url: "javascript:void(0)"},
            {title: "CodeIgniter", url: "javascript:void(0)"},
            {title: "Composer", url: "javascript:void(0)"},
            //Line2
            {title: "Css3", url: "javascript:void(0)"},
            {title: "D3Js", url: "javascript:void(0)"},
            {title: "Datatable", url: "javascript:void(0)"},
            {title: "DigitalOcean", url: "javascript:void(0)"},
            {title: "Docker", url: "javascript:void(0)"},
            {title: "ElementUI", url: "javascript:void(0)"},
            {title: "git", url: "javascript:void(0)"},
            {title: "GitHub", url: "javascript:void(0)"},
            {title: "GitLab", url: "javascript:void(0)"},
            {title: "Google", url: "javascript:void(0)"},
            //Line3
            {title: "Handlebar", url: "javascript:void(0)"},
            {title: "HTML5", url: "javascript:void(0)"},
            {title: "Java", url: "javascript:void(0)"},
            {title: "Javascript", url: "javascript:void(0)"},
            {title: "Jenkins", url: "javascript:void(0)"},
            {title: "jQuery", url: "javascript:void(0)"},
            {title: "Javascript", url: "javascript:void(0)"},
            {title: "Kubernetes", url: "javascript:void(0)"},
            {title: "Laravel", url: "javascript:void(0)"},
            {title: "LoDash", url: "javascript:void(0)"},
            //Line4
            {title: "Lua", url: "javascript:void(0)"},
            {title: "Marionettejs", url: "javascript:void(0)"},
            {title: "meteorjs", url: "javascript:void(0)"},
            {title: "MongoDB", url: "javascript:void(0)"},
            {title: "MySQL", url: "javascript:void(0)"},
            {title: "Nginx", url: "javascript:void(0)"},
            {title: "Nodejs", url: "javascript:void(0)"},
            {title: "NuxtJs", url: "javascript:void(0)"},
            {title: "PHP", url: "javascript:void(0)"},
            {title: "PhpMyAdmin", url: "javascript:void(0)"},
            //Line5
            {title: "Polymer", url: "javascript:void(0)"},
            {title: "PostgreSQL", url: "javascript:void(0)"},
            {title: "Raphael", url: "javascript:void(0)"},
            {title: "React", url: "javascript:void(0)"},
            {title: "RequireJs", url: "javascript:void(0)"},
            {title: "Ruby", url: "javascript:void(0)"},
            {title: "Sails", url: "javascript:void(0)"},
            {title: "Sass", url: "javascript:void(0)"},
            {title: "Socket.io", url: "javascript:void(0)"},
            {title: "Symfony", url: "javascript:void(0)"},
            //Line6
            {title: "Android", url: "javascript:void(0)"},
            {title: "Apache", url: "javascript:void(0)"},
            {title: "BackbonJs", url: "javascript:void(0)"},
            {title: "Blogger", url: "javascript:void(0)"},
            {title: "CentOs", url: "javascript:void(0)"},
            {title: "CPanel", url: "javascript:void(0)"},
            {title: "Debian", url: "javascript:void(0)"},
            {title: "ERLang", url: "javascript:void(0)"},
            {title: "Facebook", url: "javascript:void(0)"},
            {title: "FireBase", url: "javascript:void(0)"},
            //Line7
            {title: "Flutter", url: "javascript:void(0)"},
            {title: "Go Language", url: "javascript:void(0)"},
            {title: "Google Analytics", url: "javascript:void(0)"},
            {title: "Google Cloud", url: "javascript:void(0)"},
            {title: "Google Map", url: "javascript:void(0)"},
            {title: "Google Wallet", url: "javascript:void(0)"},
            {title: "IOS", url: "javascript:void(0)"},
            {title: "Mocha", url: "javascript:void(0)"},
            {title: "OpenCart", url: "javascript:void(0)"},
            {title: "PayPal", url: "javascript:void(0)"},
            //Line8
            {title: "Python", url: "javascript:void(0)"},
            {title: "Reddis", url: "javascript:void(0)"},
            {title: "RadHat", url: "javascript:void(0)"},
            {title: "Ruby On Rails", url: "javascript:void(0)"},
            {title: "StackOverFlow", url: "javascript:void(0)"},
            {title: "Stripe", url: "javascript:void(0)"},
            {title: "Ubuntu", url: "javascript:void(0)"},
            {title: "Varnish Cache", url: "javascript:void(0)"},
            {title: "Vue", url: "javascript:void(0)"},
            {title: "Webpack", url: "javascript:void(0)"},
            //Line9
            {title: "Amcharts", url: "javascript:void(0)"},
            {title: "AngularJs", url: "javascript:void(0)"},
            {title: "Aws", url: "javascript:void(0)"},
            {title: "Babel", url: "javascript:void(0)"},
            {title: "Bitbucket", url: "javascript:void(0)"},
            {title: "Bootstrap", url: "javascript:void(0)"},
            {title: "CakePHP", url: "javascript:void(0)"},
            {title: "ChartJs", url: "javascript:void(0)"},
            {title: "CodeIgniter", url: "javascript:void(0)"},
            {title: "Composer", url: "javascript:void(0)"},
            //Line10
            {title: "Css3", url: "javascript:void(0)"},
            {title: "D3Js", url: "javascript:void(0)"},
            {title: "Datatable", url: "javascript:void(0)"},
            {title: "DigitalOcean", url: "javascript:void(0)"},
            {title: "Docker", url: "javascript:void(0)"},
            {title: "ElementUI", url: "javascript:void(0)"},
            {title: "git", url: "javascript:void(0)"},
            {title: "GitHub", url: "javascript:void(0)"},
            {title: "GitLab", url: "javascript:void(0)"},
            {title: "Google", url: "javascript:void(0)"}
        ];

    data.forEach(function(d, i) {
        d.i = i % 10;
        d.j = i / 10 | 0;
    });

    Math.seedrandom(+d3.timeHour(new Date));

    d3.shuffle(data);

// height = 460,
    var height = $('#what_wrapper').height(),
        imageWidth = 132,
        imageHeight = 152,
        radius = 75,
        depth = 4;

    var currentFocus = [innerWidth / 2, height / 2],
        desiredFocus,
        idle = true;

    var style = document.body.style,
        transform = ("webkitTransform" in style ? "-webkit-"
            : "MozTransform" in style ? "-moz-"
                : "msTransform" in style ? "-ms-"
                    : "OTransform" in style ? "-o-"
                        : "") + "transform";

    var hexbin = d3.hexbin()
        .radius(radius);

    if (!("ontouchstart" in document)) d3.select("#examples")
        .on("mousemove", mousemoved);

    var deep = d3.select("#examples-deep");

    var canvas = deep.append("canvas")
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var svg = deep.append("svg")
        .attr("height", height);

    var mesh = svg.append("path")
        .attr("class", "example-mesh");

    var anchor = svg.append("g")
        .attr("class", "example-anchor")
        .selectAll("a");

    var graphic = deep.selectAll("svg,canvas");

    var image = new Image;
    image.src = "images/project/main.png";
    image.onload = resized;

    d3.select(window)
        .on("resize", resized)
        .each(resized);

    function drawImage(d) {
        context.save();
        context.beginPath();
        context.moveTo(0, -radius);

        for (var i = 1; i < 6; ++i) {
            var angle = i * Math.PI / 3,
                x = Math.sin(angle) * radius,
                y = -Math.cos(angle) * radius;
            context.lineTo(x, y);
        }

        context.clip();
        context.drawImage(image,
            imageWidth * d.i, imageHeight * d.j,
            imageWidth, imageHeight,
            -imageWidth / 2, -imageHeight / 2,
            imageWidth, imageHeight);
        context.restore();
    }

    function resized() {
        var deepWidth = innerWidth * (depth + 1) / depth,
            deepHeight = height * (depth + 1) / depth,
            centers = hexbin.size([deepWidth, deepHeight]).centers();

        desiredFocus = [innerWidth / 2, height / 2];
        moved();

        graphic
            // .style("filter", "grayscale(100%)")
            .style("left", Math.round((innerWidth - deepWidth) / 2) + "px")
            .style("top", Math.round((height - deepHeight) / 2) + "px")
            .attr("width", deepWidth)
            .attr("height", deepHeight);

        centers.forEach(function(center, i) {
            center.j = Math.round(center[1] / (radius * 1.5));
            center.i = Math.round((center[0] - (center.j & 1) * radius * Math.sin(Math.PI / 3)) / (radius * 2 * Math.sin(Math.PI / 3)));
            context.save();
            context.translate(Math.round(center[0]), Math.round(center[1]));
            drawImage(center.example = data[(center.i % 10) + ((center.j + (center.i / 10 & 1) * 5) % 10) * 10]);
            context.restore();
        });

        mesh.attr("d", hexbin.mesh);

        anchor = anchor.data(centers, function(d) { return d.i + "," + d.j; });

        anchor.exit().remove();

        var anchorEnter = anchor.enter().append("a")
            .attr("xlink:href", function(d) { return d.example.url; })//NOTE disable redirection
            .attr("xlink:title", function(d) { return d.example.title; })
            .attr("xlink:class", 'test-class');

        anchorEnter.append("path")
            .attr("d", hexbin.hexagon());

        anchor = anchorEnter.merge(anchor)
            .attr("transform", function(d) { return "translate(" + d + ")"; });
    }

    function mousemoved() {
        var m = d3.mouse(this);

        desiredFocus = [
            Math.round((m[0] - innerWidth / 2) / depth) * depth + innerWidth / 2,
            Math.round((m[1] - height / 2) / depth) * depth + height / 2
        ];

        moved();
    }

    function moved() {
        var t = d3.timer(function() {
            if (Math.abs(desiredFocus[0] - currentFocus[0]) < .5 && Math.abs(desiredFocus[1] - currentFocus[1]) < .5) currentFocus = desiredFocus, t.stop();
            else currentFocus[0] += (desiredFocus[0] - currentFocus[0]) * .14, currentFocus[1] += (desiredFocus[1] - currentFocus[1]) * .14;
            deep.style(transform, "translate(" + (innerWidth / 2 - currentFocus[0]) / depth + "px," + (height / 2 - currentFocus[1]) / depth + "px)");
        });
    }

});
