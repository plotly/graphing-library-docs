---
description: How to make 3D Surface Plots plots in MATLAB<sup>&reg;</sup> with Plotly.
name: 3D Surface Plots
display_as: 3d_charts
order: 3
permalink: matlab/3d-surface-plots/
thumbnail: thumbnail/3d-surface.jpg
layout: base
language: matlab
page_type: u-guide
---

## Create Surface Plot

Create three matrices of the same size. Then plot them as a surface. The surface plot uses `Z` for both height and color.

<pre class="mcode">
[X,Y] = meshgrid(1:0.5:10,1:20);
Z = sin(X) + cos(Y);
surf(X,Y,Z)

fig2plotly('TreatAs', 'surf')
</pre>

plot_0_0_create_surface_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Colormap Colors for Surface Plot

Specify the colors for a surface plot by including a fourth matrix input, `C`. The surface plot uses `Z` for height and `C` for color. Specify the colors using a colormap, which uses single numbers to stand for colors on a spectrum. When you use a colormap, `C` is the same size as `Z`. Add a color bar to the graph to show how the data values in `C` correspond to the colors in the colormap.

<pre class="mcode">
[X,Y] = meshgrid(1:0.5:10,1:20);
Z = sin(X) + cos(Y);
C = X.*Y;
surf(X,Y,Z,C)
colorbar

fig2plotly('TreatAs', 'surf')
</pre>

plot_1_0_specify_colormap_colors_for_surface_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify True Colors for Surface Plot

Specify the colors for a surface plot by including a fourth matrix input, `CO`. The surface plot uses `Z` for height and `CO` for color. Specify the colors using truecolor, which uses triplets of numbers to stand for all possible colors. When you use truecolor, if `Z` is `m`-by-`n`, then `CO` is `m`-by-`n`-by-3. The first page of the array indicates the red component for each color, the second page indicates the green component, and the third page indicates the blue component.

<pre class="mcode">
[X,Y,Z] = peaks(25);
CO(:,:,1) = zeros(25); % red
CO(:,:,2) = ones(25).*linspace(0.5,0.6,25); % green
CO(:,:,3) = ones(25).*linspace(0,1,25); % blue
surf(X,Y,Z,CO)

fig2plotly('TreatAs', 'surf')
</pre>

plot_2_0_specify_true_colors_for_surface_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Surface Plot Appearance

Create a semitransparent surface by specifying the `FaceAlpha` name-value pair with `0.5` as the value. To allow further modifications, assign the surface object to the variable `s`. 

<pre class="mcode">
[X,Y] = meshgrid(-5:.5:5);
Z = Y.*sin(X) - X.*cos(Y);
s = surf(X,Y,Z,'FaceAlpha',0.5)

fig2plotly('TreatAs', 'surf')
</pre>

plot_3_0_modify_surface_plot_appearance


<pre class="codeoutput">s = 
  Surface with properties:

       EdgeColor: [0 0 0]
       LineStyle: '-'
       FaceColor: 'flat'
    FaceLighting: 'flat'
       FaceAlpha: 0.5000
           XData: [21x21 double]
           YData: [21x21 double]
           ZData: [21x21 double]
           CData: [21x21 double]

  Show all properties

</pre>


Use `s` to access and modify properties of the surface object after it is created. For example, hide the edges by setting the `EdgeColor` property. 

<pre class="mcode">
s.EdgeColor = 'none';

fig2plotly('TreatAs', 'surf')
</pre>

plot_3_1_modify_surface_plot_appearance



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Surface Plot With Colormap-Based Lighting

Create three matrices of the same size. Then plot them as a surface using colormap-based lighting. The surface uses `Z` for height and both `Z` and the light source for color.

<pre class="mcode">
[X,Y] = meshgrid(1:0.5:10,1:20);
Z = sin(X) + cos(Y);
surfl(X,Y,Z)

fig2plotly()
</pre>

plot_0_0_create_surface_plot_with_colormap_based_lighting



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Surface Plot With Light Object

Create three matrices of the same size. Then plot them as a surface with highlights from a MATLAB® light object. The surface uses `Z` for height and both `Z` and the light object for color. The function returns an array containing a surface object and a lighting object. Assign it to the variable `sl`. 

<pre class="mcode">
[X,Y] = meshgrid(1:0.5:10,1:20);
Z = sin(X) + cos(Y);
sl = surfl(X,Y,Z,'light');

fig2plotly()
</pre>

plot_1_0_create_surface_plot_with_light_object

Index into `sl` to access and modify properties of the surface object and the light object after they are created. The surface plot is accessible as `sl(1)` and the light object as `sl(2)`. For example, change the color of the light by setting the `Color` property of the light object.

<pre class="mcode">
sl(2).Color = 'r';

fig2plotly()
</pre>

plot_1_1_create_surface_plot_with_light_object



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Light Direction and Reflectance for Surface Plot

Create three matrices of the same size to plot as a surface. Specify the direction of the light source to have an azimuth of 45 degrees and an elevation of 20 degrees. Increase the reflectance of the surface by increasing the contribution of ambient light and decreasing the contibutions of diffused and specular reflection. Assign the surface object to the variable `sl`.

<pre class="mcode">
[X,Y] = meshgrid(1:0.5:10,1:20);
Z = sin(X) + cos(Y);
s = [-45 20];
k = [.65 .4 .3 10];
</pre>

Plot the data using the source and reflectance vectors.

<pre class="mcode">
sl = surfl(X,Y,Z,s,k);

fig2plotly()
</pre>

plot_2_0_specify_light_direction_and_reflectance_for_surface

Use `sl` to access and modify properties of the surface object after it is created. For example, hide the edges by setting the `EdgeColor` property.

<pre class="mcode">
sl.EdgeColor = 'none';

fig2plotly()
</pre>

plot_2_1_specify_light_direction_and_reflectance_for_surface


<!--------------------- EXAMPLE BREAK ------------------------->

## Plotting Implicit Function


<pre class="mcode">
z = 0:4*pi;
t = 0:2*pi;
[Z,T] = meshgrid(z,t);
X = sin(Z).*cos(T);
Y = sin(Z).*sin(T);

surf(X,Y,Z)

fig2plotly()
</pre>

{% capture 3d_surface_plot_1 %}
  {% raw %}
{ "data": [ { "name": "", "type": "surface", "x": [ [ 0, 0.841470984807897, 0.909297426825682, 0.141120008059867, -0.756802495307928, -0.958924274663138, -0.279415498198926, 0.656986598718789, 0.989358246623382, 0.412118485241757, -0.54402111088937, -0.999990206550703, -0.536572918000435 ], [ 0, 0.454648713412841, 0.491295496433882, 0.0762474657588767, -0.408902133301636, -0.518108996753427, -0.150968837972175, 0.354971374212228, 0.534552541980273, 0.222668567867006, -0.293935860654473, -0.540297014444902, -0.289911584862031 ], [ 0, -0.350175488374015, -0.378401247653964, -0.058726644927621, 0.314940964313378, 0.399053303389328, 0.116277875657727, -0.273402894710691, -0.411718304544148, -0.171501803915957, 0.226392664311473, 0.416142761034199, 0.22329312240275 ], [ 0, -0.833049961066805, -0.900197629735517, -0.139707749099463, 0.749228791763343, 0.949327836724532, 0.276619246650812, -0.650411803098649, -0.979457240606921, -0.40799420809968, 0.538576817772715, 0.989982801159126, 0.531203162699437 ], [ 0, -0.550022141361503, -0.594356462512304, -0.0922421930445537, 0.494679123311691, 0.626794735024827, 0.182638157968156, -0.429435099245418, -0.646687706654182, -0.269378618918249, 0.355595928747972, 0.653637219437953, 0.350727464979158 ], [ 0, 0.238693498554501, 0.257933295329461, 0.04003040989885, -0.21467624978307, -0.272010555444685, -0.0792596108714035, 0.186362254412623, 0.280643522443254, 0.116902430193471, -0.154318217253011, -0.283659407431996, -0.152205446580384 ], [ 0, 0.807955436690964, 0.873080370965655, 0.135499238590945, -0.726659268857526, -0.9207305956793, -0.268286459000217, 0.630819010817269, 0.949952391260276, 0.395703924108492, -0.522352905986497, -0.960160883271348, -0.515201372485301 ] ], "y": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0.708073418273571, 0.765147401234293, 0.118748392158235, -0.636827341031836, -0.806906953756989, -0.235120034440039, 0.55283516022949, 0.832516258113991, 0.34678574763392, -0.457777979936364, -0.841462743904472, -0.451510541731073 ], [ 0, 0.765147401234293, 0.826821810431806, 0.128320060202457, -0.688158561598754, -0.871947375471875, -0.254071793527499, 0.597396223673952, 0.899620907863409, 0.374738278177627, -0.494676996270553, -0.909288521667437, -0.487904373642143 ], [ 0, 0.118748392158235, 0.128320060202457, 0.019914856674817, -0.106799974237582, -0.135323401369264, -0.0394311173578842, 0.0927139541064203, 0.139618243737588, 0.058158163958937, -0.0767722635534458, -0.141118626008224, -0.0757211745129278 ], [ 0, -0.636827341031836, -0.688158561598754, -0.106799974237582, 0.572750016904307, 0.725716283876408, 0.211462346264655, -0.497209097294248, -0.748748789798052, -0.311892297993485, 0.411716534221266, 0.756795083601063, 0.406079723257386 ], [ 0, -0.806906953756989, -0.871947375471875, -0.135323401369264, 0.725716283876408, 0.919535764538226, 0.267938303940044, -0.630000397639817, -0.948719639025321, -0.395190419535723, 0.521675049161024, 0.958914883486875, 0.514532796197451 ], [ 0, -0.235120034440039, -0.254071793527499, -0.0394311173578842, 0.211462346264655, 0.267938303940044, 0.0780730206337539, -0.183572237791028, -0.276442027377488, -0.115152291870812, 0.152007929729886, 0.279412761757412, 0.149926789203143 ] ], "z": [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] ], "xaxis": "x1", "yaxis": "y1", "visible": true, "showscale": false, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "xaxis1": { "side": "bottom", "type": "linear", "anchor": "y1", "domain": [ 0.13, 0.905 ] }, "yaxis1": { "side": "left", "type": "linear", "anchor": "x1", "domain": [ 0.11, 0.925 ] }, "showlegend": false, "annotations": [] }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=3d_surface_plot_1
  index=1
%}


<!--------------------- EXAMPLE BREAK ------------------------->