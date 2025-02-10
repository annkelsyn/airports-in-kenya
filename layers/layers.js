var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_County_1 = new ol.format.GeoJSON();
var features_County_1 = format_County_1.readFeatures(json_County_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_1.addFeatures(features_County_1);
var lyr_County_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_1, 
                style: style_County_1,
                popuplayertitle: 'County',
                interactive: true,
                title: '<img src="styles/legend/County_1.png" /> County'
            });
var format_Airport_2 = new ol.format.GeoJSON();
var features_Airport_2 = format_Airport_2.readFeatures(json_Airport_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_2.addFeatures(features_Airport_2);
var lyr_Airport_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airport_2, 
                style: style_Airport_2,
                popuplayertitle: 'Airport',
                interactive: true,
    title: 'Airport<br />\
    <img src="styles/legend/Airport_2_0.png" /> International<br />\
    <img src="styles/legend/Airport_2_1.png" /> Regional<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_County_1.setVisible(true);lyr_Airport_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_County_1,lyr_Airport_2];
lyr_County_1.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'objectid_1': 'objectid_1', 'country': 'country', 'admin': 'admin', });
lyr_Airport_2.set('fieldAliases', {'id': 'id', 'F_': 'F_', 'Airport_Ai': 'Name', 'IATA': 'IATA', 'ICAO': 'ICAO', 'Nearest_Ci': 'Town', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Runway_Len': 'Runway Length', 'Elevation': 'Elevation', 'Airlines_O': 'Airlines ', 'Destinatio': 'Destinations', 'Airport_Ty': 'Airport_Ty', 'Type': 'Type', });
lyr_County_1.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'objectid_1': 'TextEdit', 'country': 'TextEdit', 'admin': 'TextEdit', });
lyr_Airport_2.set('fieldImages', {'id': 'TextEdit', 'F_': 'TextEdit', 'Airport_Ai': 'TextEdit', 'IATA': 'TextEdit', 'ICAO': 'TextEdit', 'Nearest_Ci': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Runway_Len': 'TextEdit', 'Elevation': 'TextEdit', 'Airlines_O': 'TextEdit', 'Destinatio': 'TextEdit', 'Airport_Ty': 'TextEdit', 'Type': 'TextEdit', });
lyr_County_1.set('fieldLabels', {'id': 'hidden field', 'objectid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'objectid_1': 'hidden field', 'country': 'hidden field', 'admin': 'no label', });
lyr_Airport_2.set('fieldLabels', {'id': 'hidden field', 'F_': 'hidden field', 'Airport_Ai': 'inline label - always visible', 'IATA': 'inline label - always visible', 'ICAO': 'inline label - always visible', 'Nearest_Ci': 'inline label - always visible', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Runway_Len': 'inline label - always visible', 'Elevation': 'inline label - visible with data', 'Airlines_O': 'inline label - always visible', 'Destinatio': 'inline label - visible with data', 'Airport_Ty': 'no label', 'Type': 'no label', });
lyr_Airport_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});