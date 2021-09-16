---
  description: Creates default scales for the three date/time class and then convert them with ggplotly.
  function: scale_date
  permalink: /ggplot2/Scales/scale_date/
  layout: base
  language: ggplot2
  name: scale_date
  reference: https://ggplot2.tidyverse.org/reference/
---

# Default plot

The date scale will attempt to pick sensible defaults for major and minor tick marks. Override with `date_breaks`, `date_labels`, `date_minor_breaks` arguments.


<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(date_labels = "%b %d")

plotly::ggplotly(p)
</pre>


{% capture plot_640 %}
  {% raw %}
    {"data":[{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","type":"scatter","xsrc":"nadhil:438:fa3aad","x":[18828,18829,18830,18831,18832,18833,18834,18835,18836,18837,18838,18839,18840,18841,18842,18843,18844,18845,18846,18847,18848,18849,18850,18851,18852,18853,18854,18855,18856,18857],"ysrc":"nadhil:438:faac3b","y":[0.358047472080216,0.508057214086875,0.406896034488454,0.631306547671556,0.979450087761506,0.236173919402063,0.489379949634895,0.0490549118258059,0.668845375999808,0.0137766234111041,0.31515970826149,0.0669719818979502,0.902667507063597,0.692799901822582,0.359741928987205,0.135483029764146,0.480199585435912,0.175041585927829,0.980399548308924,0.701720156008378,0.575480133295059,0.844046679791063,0.838487800210714,0.522838526405394,0.524290012661368,0.736062912270427,0.846356847789139,0.58249145001173,0.546303625684232,0.0981155093759298],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:438:592bdd","text":["date:2021-07-20price:0.35804747","date:2021-07-21price:0.50805721","date:2021-07-22price:0.40689603","date:2021-07-23price:0.63130655","date:2021-07-24price:0.97945009","date:2021-07-25price:0.23617392","date:2021-07-26price:0.48937995","date:2021-07-27price:0.04905491","date:2021-07-28price:0.66884538","date:2021-07-29price:0.01377662","date:2021-07-30price:0.31515971","date:2021-07-31price:0.06697198","date:2021-08-01price:0.90266751","date:2021-08-02price:0.69279990","date:2021-08-03price:0.35974193","date:2021-08-04price:0.13548303","date:2021-08-05price:0.48019959","date:2021-08-06price:0.17504159","date:2021-08-07price:0.98039955","date:2021-08-08price:0.70172016","date:2021-08-09price:0.57548013","date:2021-08-10price:0.84404668","date:2021-08-11price:0.83848780","date:2021-08-12price:0.52283853","date:2021-08-13price:0.52429001","date:2021-08-14price:0.73606291","date:2021-08-15price:0.84635685","date:2021-08-16price:0.58249145","date:2021-08-17price:0.54630363","date:2021-08-18price:0.09811551"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[18826.55,18858.45],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"date"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["Jul19","Jul26","Aug02","Aug09","Aug16"],"tickvals":[18827,18834,18841,18848,18855],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["Jul19","Jul26","Aug02","Aug09","Aug16"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.0345545228337869,1.02873069455381],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"price"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_640
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example1_montage.png"
%}




<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(date_breaks = "1 week", date_labels = "%W")

plotly::ggplotly(p)
</pre>



{% capture plot_641 %}
  {% raw %}
    {"data":[{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","type":"scatter","xsrc":"nadhil:440:2f120f","x":[18828,18829,18830,18831,18832,18833,18834,18835,18836,18837,18838,18839,18840,18841,18842,18843,18844,18845,18846,18847,18848,18849,18850,18851,18852,18853,18854,18855,18856,18857],"ysrc":"nadhil:440:e64219","y":[0.617336431285366,0.815074435900897,0.0171787121798843,0.700448862975463,0.0329516525380313,0.73393036169,0.23783247708343,0.340202666586265,0.494999332353473,0.629582687281072,0.901215136516839,0.505386161850765,0.752607250120491,0.0765885801520199,0.959218196803704,0.0736635539215058,0.486052482156083,0.834367827279493,0.47062415163964,0.25107912439853,0.333427672274411,0.62795065366663,0.66244432865642,0.271369752241299,0.0609744652174413,0.33175723743625,0.62727069389075,0.386244867928326,0.00799407856538892,0.296547450823709],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:440:99b04f","text":["date:2021-07-20price:0.617336431","date:2021-07-21price:0.815074436","date:2021-07-22price:0.017178712","date:2021-07-23price:0.700448863","date:2021-07-24price:0.032951653","date:2021-07-25price:0.733930362","date:2021-07-26price:0.237832477","date:2021-07-27price:0.340202667","date:2021-07-28price:0.494999332","date:2021-07-29price:0.629582687","date:2021-07-30price:0.901215137","date:2021-07-31price:0.505386162","date:2021-08-01price:0.752607250","date:2021-08-02price:0.076588580","date:2021-08-03price:0.959218197","date:2021-08-04price:0.073663554","date:2021-08-05price:0.486052482","date:2021-08-06price:0.834367827","date:2021-08-07price:0.470624152","date:2021-08-08price:0.251079124","date:2021-08-09price:0.333427672","date:2021-08-10price:0.627950654","date:2021-08-11price:0.662444329","date:2021-08-12price:0.271369752","date:2021-08-13price:0.060974465","date:2021-08-14price:0.331757237","date:2021-08-15price:0.627270694","date:2021-08-16price:0.386244868","date:2021-08-17price:0.007994079","date:2021-08-18price:0.296547451"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[18826.55,18858.45],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"date"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["29","30","31","32","33"],"tickvals":[18827,18834,18841,18848,18855],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["29","30","31","32","33"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.0395671273465268,1.00677940271562],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"price"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_641
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example2_montage.png"
%}






<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(date_minor_breaks = "1 day")

plotly::ggplotly(p)
</pre>



{% capture plot_642 %}
  {% raw %}
    {"data":[{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","type":"scatter","xsrc":"nadhil:442:6adc26","x":[18828,18829,18830,18831,18832,18833,18834,18835,18836,18837,18838,18839,18840,18841,18842,18843,18844,18845,18846,18847,18848,18849,18850,18851,18852,18853,18854,18855,18856,18857],"ysrc":"nadhil:442:10f24a","y":[0.170387323014438,0.224415207281709,0.602193120401353,0.214638460427523,0.150659062666818,0.764165249885991,0.71177296875976,0.173914547311142,0.450741865672171,0.749866923782974,0.0741919514257461,0.953210372943431,0.134338471340016,0.303978608222678,0.427479356294498,0.0770912228617817,0.0918900591786951,0.317846456775442,0.232932770624757,0.501622945070267,0.337115341797471,0.171556134708226,0.864928469760343,0.320951859699562,0.66038235835731,0.150898621417582,0.112432094756514,0.473650560947135,0.370060814311728,0.84257424226962],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:442:f393fe","text":["date:2021-07-20price:0.17038732","date:2021-07-21price:0.22441521","date:2021-07-22price:0.60219312","date:2021-07-23price:0.21463846","date:2021-07-24price:0.15065906","date:2021-07-25price:0.76416525","date:2021-07-26price:0.71177297","date:2021-07-27price:0.17391455","date:2021-07-28price:0.45074187","date:2021-07-29price:0.74986692","date:2021-07-30price:0.07419195","date:2021-07-31price:0.95321037","date:2021-08-01price:0.13433847","date:2021-08-02price:0.30397861","date:2021-08-03price:0.42747936","date:2021-08-04price:0.07709122","date:2021-08-05price:0.09189006","date:2021-08-06price:0.31784646","date:2021-08-07price:0.23293277","date:2021-08-08price:0.50162295","date:2021-08-09price:0.33711534","date:2021-08-10price:0.17155613","date:2021-08-11price:0.86492847","date:2021-08-12price:0.32095186","date:2021-08-13price:0.66038236","date:2021-08-14price:0.15089862","date:2021-08-15price:0.11243209","date:2021-08-16price:0.47365056","date:2021-08-17price:0.37006081","date:2021-08-18price:0.84257424"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[18826.55,18858.45],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"date"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["Jul19","Jul26","Aug02","Aug09","Aug16"],"tickvals":[18827,18834,18841,18848,18855],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["Jul19","Jul26","Aug02","Aug09","Aug16"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.0302410303498618,0.997161294019315],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"price"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.25","0.50","0.75"],"tickvals":[0.25,0.5,0.75],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.25","0.50","0.75"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_642
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example3_montage.png"
%}




# Setting axis limits


<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(limits = c(Sys.Date() - 7, NA))

plotly::ggplotly(p)
</pre>



{% capture plot_643 %}
  {% raw %}
    {"data":[{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","type":"scatter","xsrc":"nadhil:444:2c862b","x":[18850,18851,18852,18853,18854,18855,18856,18857,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"ysrc":"nadhil:444:252097","y":[0.184808821184561,0.161408008309081,0.320974759990349,0.384486502269283,0.847692961106077,0.0837328098714352,0.567889955127612,0.312630394240841,0.221592279849574,0.677559365751222,0.289887913269922,0.724364795954898,0.906100045423955,0.0311409763526171,0.517090236768126,0.132481563836336,0.903048988198861,0.926669402746484,0.876638061134145,0.206167803844437,0.491963076638058,0.14807790890336,0.959677997045219,0.107347571756691,0.499869189225137,0.814590045716614,0.316407878650352,0.462419457733631,0.448779368307441,0.621202919166535],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:444:3371c5","text":["date:2021-08-11price:0.18480882","date:2021-08-12price:0.16140801","date:2021-08-13price:0.32097476","date:2021-08-14price:0.38448650","date:2021-08-15price:0.84769296","date:2021-08-16price:0.08373281","date:2021-08-17price:0.56788996","date:2021-08-18price:0.31263039","date:2021-08-10price:0.22159228","date:2021-08-09price:0.67755937","date:2021-08-08price:0.28988791","date:2021-08-07price:0.72436480","date:2021-08-06price:0.90610005","date:2021-08-05price:0.03114098","date:2021-08-04price:0.51709024","date:2021-08-03price:0.13248156","date:2021-08-02price:0.90304899","date:2021-08-01price:0.92666940","date:2021-07-31price:0.87663806","date:2021-07-30price:0.20616780","date:2021-07-29price:0.49196308","date:2021-07-28price:0.14807791","date:2021-07-27price:0.95967800","date:2021-07-26price:0.10734757","date:2021-07-25price:0.49986919","date:2021-07-24price:0.81459005","date:2021-07-23price:0.31640788","date:2021-07-22price:0.46241946","date:2021-07-21price:0.44877937","date:2021-07-20price:0.62120292"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[18849.65,18857.35],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"date"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["Aug12","Aug14","Aug16","Aug18"],"tickvals":[18851,18853,18855,18857],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["Aug12","Aug14","Aug16","Aug18"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.015285874682013,1.00610484807985],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"price"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_643
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_date/example4_montage.png"
%}










