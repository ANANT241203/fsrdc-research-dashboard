import {
    x_tfidf, y_tfidf, Cluster_TFIDF,
    x_k3, y_k3, Cluster_K3,
    x_k4, y_k4, Cluster_K4,
    x_db, y_db, Cluster_DB,
    x_pca, y_pca, outputType_x
} from './fsrdc-arrays.js';

document.addEventListener("DOMContentLoaded", function() {
    // --- All Plotly plots ---
    Plotly.newPlot('rdc-bar', [{
        x: ["Boston", "Michigan", "Baruch", "Penn State", "Triangle", "Stanford", "Chicago", "Atlanta", "UIUC", "Kentucky"],
        y: [1444, 1342, 970, 869, 752, 725, 652, 551, 410, 351],
        type: 'bar',
        marker: {color: 'steelblue'}
    }], {
        title: 'Top 10 RDCs by Research Output',
        xaxis: {title: 'RDC'},
        yaxis: {title: 'Number of Outputs'}
    });

    Plotly.newPlot('pub-trend', [{
        x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        y: [1, 2, 5, 12, 10, 20, 11, 19, 16, 22, 21, 33, 36, 35, 57, 58, 47, 46, 80, 100, 97, 108, 110, 125, 139, 158, 167, 130, 180, 163, 214, 156, 15],
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'crimson'}
    }], {
        title: 'Number of Publications per Year',
        xaxis: {title: 'Year'},
        yaxis: {title: 'Publications'}
    });

    Plotly.newPlot('top-authors', [{
        x: ["J. Wang", "Z. Wang", "Y. Zhang", "J. Lee", "L. Zhang", "M. Finger", "Y. Chen", "A. Sharma", "S. Bhattacharya", "H. Kim"],
        y: [682, 485, 343, 323, 311, 294, 293, 288, 277, 264],
        type: 'bar',
        marker: {color: 'darkgreen'}
    }], {
        title: 'Top 10 Authors by FSRDC Outputs',
        xaxis: {title: 'Author'},
        yaxis: {title: 'Publications'}
    });

    Plotly.newPlot('pca-plot', [{
        x: [-1.4010829818352049, -1.7588884928423674, 0.0565109490235015, -1.4416397172647781, -0.46787092793055696, -1.022432830087504, -1.48881264962289, -0.5844210271542244, 1.5418839855538569, -1.4763509386022617, 0.32191910001180407, 1.9447321523157761, -0.9408669443944813, -1.799445228271941, 1.5013272501242838, -0.9446274576926272, -1.4416397172647781, 0.2621503098017601, -1.6352697818562851, 2.0809943462284792, 0.7348280582631119, -1.796137129807672, -1.796137129807672, -0.42536568780362066, 0.026015005083316646, -0.4645628294662878, -1.022432830087504, -0.9408669443944813, -1.6038666589830708, -1.0276894332491366, 0.3791528238593042, 1.6635541918425767, -1.4416397172647781, 2.0285648107087346, -0.30369548151490117, -0.7190053592974487, 0.3816902394871243, -0.45717594970130004, -0.7929137222975993, 3.2842822433526053, 0.8159415291222583, -1.4749913448353553, 3.0814985662047394, -1.48881264962289, -1.8772506006668184, 0.10051227901392443, -1.9250124439553868, -1.48881264962289, -1.4357942031726887, 0.7453412645863767, -1.9250124439553868, 1.9486291617105027, -0.08514199488213786, -0.9814236798240547, 0.21556628837410524, -0.8597534735353349, 0.014142204993145568, -0.42731419250098374, 1.7041109272721495, -1.1460515410735868, -1.6777750219832217, -0.30428439244535826, 0.38304983325403047, 0.378382141022855, 0.22879868223118255, -0.0011751896578752568, -0.6679354175446106, -0.38675745707141074, 1.9486291617105027, 0.05859594981744508, 0.6655873874941366, 0.2693554176607557, -2.091136395068406, -0.5881815404523704, -1.8472070715605102, -1.48881264962289, 1.7041109272721495, 2.631477467084708, 1.7446676627017226, 3.1526877416710772, 2.921220129183809, 3.3149146833893703, 0.10051227901392443, -1.3332019048331358, 0.5819365010071701, -0.5973351530087293, 3.1932444771006505, -1.0087480213965505, -0.82821385456554, 0.4602662947184505, 0.33859608842973105, -1.9250124439553868, 2.3070235836481223, 1.4202137792651373, -1.516907674031835, 2.272494134216631, 1.3796570438355642, -0.06515925726521805, 0.34385269159136345, 0.5819365010071701, -0.9570891687132553, 2.7956529135003634, 0.06657174051288983, -0.9408669443944813, 1.756540462791894, -1.072143178073436, -0.5489843987897034, -0.3481492263392007, -0.4226465002698084, -0.8597534735353349, 1.0272899078960258, -0.17015247513601056, 0.01939880815477804, 0.8159415291222583, -0.45717594970130004, 2.7956529135003634, 1.9880080752791616, -1.1604617567915785, -1.3952374677431156, -0.9910297072142898, -0.05958438610101309, -0.4659224232331938, 2.2664668482185495, 0.6749227719564874, -0.5614461098103316, -0.044585259452564696, 0.0565109490235015, -1.672518418821589, 3.3541118250520365, -0.3760624788421537, 0.5413797655775969, -0.9408669443944813, -0.3481492263392007, 3.1121310062415044, -1.0087480213965505, 1.9140997122790102, 0.09525567585229194, -0.38208976484023527, -0.497732685130873, 0.22938759316163954, 2.5975369285836734, -0.7962218207618688, 0.5819365010071701, -0.21732540749412238, -1.3952374677431156, 1.069795148022962, -1.9250124439553868, -0.5567784175791561, -0.9838245993552942, -0.5824725224568615, 0.06657174051288983, -1.594713046426712, 2.8754067905926033, 2.230577805020152, -0.30292479867845196, 0.9075682063046696, 0.9859624896300034, -0.2075376081978949, -0.8229572514039077, 0.5126958302381946, -2.1244880226389835, -0.4645628294662878, -1.1355383347503223, -1.3952374677431156, 2.313639780576661, -0.7909652176002363, -1.066886574911804, 1.5118404564475485, 0.4721390948086216, -0.30700357997917055, 0.7839494953185868, -0.3462007216418375, 2.388137054507269, -0.1806656814592755, 0.465522897880083, -0.7394428610135216, -1.9178073360963912, 1.5118404564475485, 0.4602662947184505, 0.06657174051288983, 3.1998606740291904, 0.7061441229237098, 1.1476005204178392, 2.039078017032, 1.4320865793553081, 2.9093473290936385, 3.5176983605372354, 1.2698596376370157, 0.4602662947184505, 0.09525567585229194, -1.5522078062997755, 0.5439171812054171, -0.8597534735353349, 0.09706768445307468, 1.5418839855538569, 2.0285648107087346, -1.693544831468119, -0.3834493586071414, -0.38675745707141074, 1.8782106690806135],
        y: [1.0759086915927163, -0.6157416990098511, 0.11640254199709724, 0.9332883047600189, -0.670014552214323, -0.7477890563627249, -0.16878753782735667, -0.28244314520122166, -0.5199286724324211, -0.5410240375511273, -0.8399960710679032, -0.9409748968457616, -1.0504684894336331, -0.7583620858425482, -0.6625490592651182, -0.9422760105746699, 0.9332883047600189, 1.8971524107742244, -0.6317778570045761, 2.329422221531842, -0.6014612699758957, -0.27863435796520897, -0.27863435796520897, -0.9712914838744423, 0.6333631806697483, -0.19028682433698374, -0.7477890563627249, -1.0504684894336331, 0.36280675742923074, -0.7836194657472478, 0.9216607970248206, -0.09206751193432985, 0.9332883047600189, 1.1915159695599438, -0.5434303233763512, 0.24985240076076007, -0.8897588863309678, 3.0603160426508222, -0.44345528201292744, 1.0304531389072977, -0.3162204963105015, 0.3826010088190285, 0.31735120474381234, -0.16878753782735667, -0.563875131630603, -0.04085150141953601, -0.2984286093550066, -0.16878753782735667, -0.3984036507184302, -0.5298004512068498, -0.2984286093550066, -1.828769533831394, 0.2771628389407029, -1.1930888762663303, -0.5724457966761234, -0.7652277157682391, -0.361922684469453, -0.5273941653816259, 0.050552874898367114, -0.7317528983679997, -0.33050092534445696, 0.824092041486621, 0.03386616003918785, -1.369486614208307, 1.3464651148332336, -1.0573341193593242, 0.464133606362503, -0.384773778548929, -1.828769533831394, -1.1070969346223887, 0.10858382149791172, 1.4890855016659303, 0.018884480299837806, -0.17425066634225855, -0.4929155635669519, -0.16878753782735667, 0.050552874898367114, -0.36367841343022267, 0.1931732617310642, -0.8365912052228113, -0.6970276610797924, -0.26610965789202307, -0.04085150141953601, -0.5577614462512469, 1.6347627311883064, 0.6777135612588512, -0.6939708183901142, 0.5832016484103297, -0.5502452594611017, 1.2069015706902149, 0.7790404101921236, -0.2984286093550066, -1.504641508091799, -0.9477898329305124, -0.6836444243838246, 0.6797159256931545, -1.0904102197632093, -0.31145861850099404, 0.8148708195766463, 1.6347627311883064, -0.5700395108508995, -0.23709418459225082, 0.7759835675024456, -1.0504684894336331, 1.1884591268702658, -0.03844521559431216, -0.9552553258797171, 0.2017439267765846, 0.875958608865869, -0.7652277157682391, 0.9124395751148462, 0.8797167022609413, -0.32609227508493016, -0.3162204963105015, 3.0603160426508222, -0.23709418459225082, 1.0488955827272466, 0.08438091984858725, -0.2557832638857331, 0.24679555807108197, 2.6034394088529593, -1.1139118707071394, -1.6472618949244964, 2.9152893699929017, -0.5830188261559467, 0.41978322577339994, 0.11640254199709724, -0.294670515959934, -1.0471143174294817, 3.345556816316216, 1.492142344355609, -1.0504684894336331, 0.2017439267765846, -0.9792115920555082, 0.5832016484103297, 0.35558789995355905, -0.0766819108040589, 1.018578995698566, 2.9176956558181253, -0.0210572500297383, 0.4531566554917589, -0.9231830098902668, 1.6347627311883064, -0.22235914032643406, -0.2557832638857331, 0.6111626434547267, -0.2984286093550066, 0.8203339480915482, -0.16127135103721163, -0.7263404636940382, 0.7759835675024456, -0.4891574701718793, -0.8754784572970123, -0.3865295075096985, 1.7477170878567767, 0.040681096123938484, -1.521328222950979, 1.996426201432254, -0.5144148500765789, 2.3448078226621134, -0.5318028156411525, -0.19028682433698374, -0.6600920795989541, -0.2557832638857331, -0.5451860523371208, -0.8873526005057439, -0.0026148062097892614, -0.5908882404960725, 2.202187435829416, -1.0231580512536906, 0.056717254118663664, -0.24215339171623176, -1.2194007344264053, 0.8080558834918957, 1.242731980074738, -1.2609916016403035, -0.7064955184633002, -0.5908882404960725, 1.2069015706902149, 0.7759835675024456, 0.2654846373645643, 0.25120420833060886, 0.41667568924278175, 1.2631767883289893, 0.04749603220868919, -1.692313526218994, 0.4469922762714623, -0.5229855151220992, 1.2069015706902149, -0.0766819108040589, -0.7904344018319986, -0.31927733900017957, -0.7652277157682391, 0.2590229288297943, -0.5199286724324211, 1.1915159695599438, -0.4379921534980255, 0.09495394932841043, -0.384773778548929, 1.616320287368357],
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 6,
            color: 'teal'
        }
    }], {
        title: 'PCA Projection of Research Outputs',
        xaxis: {title: 'Principal Component 1'},
        yaxis: {title: 'Principal Component 2'}
    });

    // Add new chart for publication trends over time for top 5 RDCs
    Plotly.newPlot('top-rdc-trends', [
        {
            x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
            y: [0, 0, 5, 18, 21, 21, 1, 1, 1, 2, 11, 21, 28, 12, 20, 28, 13, 17, 11, 59, 78, 71, 60, 104, 83, 93, 98, 99, 182, 84, 107, 86, 9],
            name: 'Boston',
            type: 'bar'
        },
        {
            x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
            y: [1, 0, 3, 2, 0, 1, 1, 1, 0, 5, 2, 15, 13, 12, 22, 19, 7, 8, 13, 41, 32, 32, 40, 78, 67, 84, 124, 84, 176, 108, 240, 100, 11],
            name: 'Michigan',
            type: 'bar'
        },
        {
            x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
            y: [0, 0, 0, 6, 0, 8, 6, 18, 9, 11, 3, 5, 11, 21, 34, 23, 17, 8, 23, 54, 42, 39, 40, 43, 51, 46, 64, 60, 167, 50, 74, 33, 4],
            name: 'Baruch',
            type: 'bar'
        },
        {
            x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
            y: [0, 0, 0, 2, 0, 0, 1, 1, 1, 4, 1, 13, 24, 16, 6, 6, 6, 3, 6, 35, 30, 28, 52, 41, 50, 60, 79, 50, 102, 48, 128, 63, 13],
            name: 'Penn State',
            type: 'bar'
        },
        {
            x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
            y: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 2, 4, 6, 1, 4, 5, 26, 36, 41, 45, 44, 43, 42, 41, 43, 87, 61, 139, 73, 5],
            name: 'Triangle',
            type: 'bar'
        }
    ], {
        title: 'Publication Trends Over Time for Top 5 RDCs',
        xaxis: {title: 'Year'},
        yaxis: {title: 'Count'},
        barmode: 'group'
    });

    // --- Animated Cluster Plot ---
    // Prepare frames in Plotly format
    var clusterFrames = [
        {name: '2010', data: [{
                x: [1.55, 1.89, 1.66, 2.25, 2.25, 1.2, 2.48, 1.08, 0.73, 0.97, 1.21, 1.21],
                y: [0.18, 0.29, 0.06, 0.17, 0.17, 0.07, 0.39, -0.05, -0.16, -0.16, -0.63, -0.63],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [0.14, -0.44, -0.67, 0.26, -0.67, -0.2, -0.68, -0.44, -0.44, -0.7],
                y: [-0.03, -0.13, -0.36, -0.15, -0.36, -0.14, 0.11, 0.1, 0.1, 1.28],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                },{
                x: [-1.14, -1.26, -1.26, -1.14, -1.84, -1.14, -2.09, -1.84],
                y: [-0.12, 0.0, 0.0, -0.12, -0.1, -0.12, 0.37, -0.1],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                }]},
        {name: '2011', data: [{
                x: [0.35, 0.49, 0.51, 1.01, 0.27, 1.27, 0.49],
                y: [-0.07, -0.21, -0.47, -0.25, 2.91, -0.26, -0.21],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                },{
                x: [-0.77, -1.24, -0.77, -2.14, -0.55, -0.53, -0.53, -0.53, -0.53, -0.53, -0.53, -0.53, -0.53, -0.31, -0.31],
                y: [-0.64, 0.56, -0.64, 0.49, -0.14, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0.11, 0.11],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [1.65, 2.41, 2.81, 1.65, 1.63, 2.41, 2.92, 2.92],
                y: [-0.16, 0.04, -0.11, -0.16, 0.1, 0.04, 0.27, 0.27],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                }]},
        {name: '2012', data: [{
                x: [1.13, 2.77, 1.48, 2.77, 1.83, 1.6, 2.53, 1.36, 2.31, 2.42],
                y: [-0.3, -0.02, -0.17, -0.02, -0.05, -0.05, -0.03, -0.29, 0.2, 0.09],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [-0.28, 0.78, -0.36, -0.28, -0.28, -0.28, -0.28],
                y: [-0.57, -0.19, 0.48, -0.57, -0.57, -0.57, -0.57],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                },{
                x: [-1.32, -1.66, -1.66, -1.66, -1.66, -1.66, -1.66, -1.66, -1.66, -1.66, -1.66, -1.66, -1.67],
                y: [-0.25, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, -0.38],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                }]},
        {name: '2013', data: [{
                x: [0.93, 0.93, 2.1, 0.93, 2.44, 2.45, 2.1, 2.1, 2.33, 1.16, 1.28, 0.82, 0.93, 2.68],
                y: [-0.45, -0.45, 0.04, -0.45, -0.3, -0.07, 0.04, 0.04, -0.19, -0.45, -0.33, -0.34, -0.45, 0.16],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [-0.22, -1.04, -0.12, -0.92, -0.7, -0.23, -0.46, -0.7, -0.45, -1.73, -0.46, -1.84, -1.84, -1.84, -0.92],
                y: [-0.24, -0.84, -0.82, -0.49, -0.95, -0.47, -0.71, -0.95, -0.25, -0.39, -0.48, -0.04, -0.04, -0.04, -0.49],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [0.53],
                y: [2.32],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                }]},
        {name: '2014', data: [{
                x: [0.3, -0.52, -0.5, 0.41, 0.19, 0.3, -0.95, -0.95, 0.41, -1.5, -1.06, -1.29, -1.18, -1.5],
                y: [-0.31, -1.13, -0.67, -0.42, -0.42, -0.31, -0.46, -0.46, -0.42, 0.32, -0.35, -0.35, -0.69, 0.32],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [1.67, 1.33, 1.31, 0.76, 2.02, 2.47, 1.31, 2.59, 2.82, 2.02, 1.67, 2.59, 2.59, 2.59, 1.11],
                y: [-0.04, -0.16, -0.84, -0.29, 0.09, -0.13, -0.84, 0.22, 0.22, 0.09, -0.04, 0.22, 0.22, 0.22, 0.06],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [-0.32],
                y: [1.49],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                }]},
        {name: '2015', data: [{
                x: [-0.5, -0.38, -0.43, -0.38, -0.43, -0.43, 0.34, -0.97, -0.75, -0.97, -1.61, -0.99],
                y: [-0.42, -0.29, -1.27, -0.29, -1.27, -1.27, -0.49, 0.04, -0.43, 0.04, -0.61, -0.45],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                },{
                x: [1.71, 2.67, 1.96, 1.08, 1.7, 3.19, 2.95, 2.67, 2.07, 2.07, 2.07, 1.35, 2.44, 2.33],
                y: [-0.05, -0.23, -0.03, -0.45, -0.29, 0.28, 0.27, -0.23, -0.15, -0.15, -0.15, 0.05, -0.0, 0.11],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [-0.91, -0.15, -0.15, -0.15],
                y: [1.02, 1.55, 1.55, 1.55],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                }]},
        {name: '2016', data: [{
                x: [2.02, 3.12, 2.63, 2.88, 2.88, 1.27, 1.27, 1.27, 1.27, 1.27, 1.27, 1.27, 1.27],
                y: [-0.18, 0.17, -0.07, 0.17, 0.17, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [-0.33, -0.21, -0.21, -0.21, -0.09, 0.54, -0.45, -0.45, -0.46, -0.46, -0.07, -0.7, -0.58],
                y: [-0.24, -0.37, -0.37, -0.37, -0.0, -0.39, -0.36, -0.36, -0.12, -0.12, -0.74, -0.36, -0.24],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [-1.07, -2.2, -1.23, -1.71],
                y: [-0.47, 0.18, 0.89, 0.41],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                }]},
        {name: '2017', data: [{
                x: [-1.99, -0.34, -0.08, -0.47, -1.49, -0.34, -0.09, -0.34, -0.09, -0.34, -0.21],
                y: [0.2, -0.41, -0.15, -0.29, -0.3, -0.16, -0.41, -0.16, -0.41, -0.16, -0.28],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [1.45, 0.42, 0.68, 1.19, 0.93, 2.86, 0.42, 1.45, 1.45, 1.45, 1.45, 0.42, 0.42, 0.42, 1.45, 0.68, 1.06, 0.42],
                y: [-0.38, -0.4, -0.39, -0.38, -0.39, 0.03, -0.4, -0.38, -0.38, -0.38, -0.38, -0.4, -0.4, -0.4, -0.38, -0.39, -0.26, -0.4],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [-0.57],
                y: [0.86],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                }]},
        {name: '2018', data: [{
                x: [1.89, 1.42, 0.67, 0.92, 0.67, 1.42, 0.92, 2.39, 1.78],
                y: [0.13, -0.33, -0.29, -0.3, -0.29, -0.33, -0.3, 0.11, -0.23],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [-0.33, -0.58, -0.46, -0.46, -0.93, -0.32, -0.32, -0.82, -0.95, -0.71, -0.71, -0.29, -0.46, -0.6, -0.82, -0.08, -0.46, -0.46, -0.58, -0.58],
                y: [-0.23, -0.22, -0.1, -0.1, -0.57, -0.48, -0.48, -0.45, -0.32, -0.08, -0.08, -0.98, -0.1, 0.03, -0.45, -0.25, -0.1, -0.1, -0.22, -0.22],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                },{
                x: [-1.7],
                y: [-0.27],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                }]},
        {name: '2019', data: [{
                x: [0.05, -0.08, 0.58, -0.47, 0.05, -0.47, -0.21, -0.47, -0.21, 0.18, -0.21, 0.18, 0.58, 0.05, 0.84],
                y: [-0.37, -0.24, -0.37, -0.37, -1.15, -0.37, -0.37, -0.37, -0.37, -0.24, -0.89, -0.24, -0.37, -0.11, -0.37],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [1.36, 1.36, 1.63, 2.15, 3.07, 3.59],
                y: [-0.37, -0.37, -0.37, -0.89, 0.02, 0.29],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                },{
                x: [-1.26, -1.13, -1.39, -1.52, 0.05, -1.26, -1.26, -1.26, -1.0],
                y: [-0.37, -0.24, -0.5, -0.1, 1.99, 0.42, 0.42, 0.42, 0.16],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                }]},
        {name: '2020', data: [{
                x: [-0.67, -0.67, -0.98, -0.51, -0.37, -0.67, -0.38, -1.28, -1.0, -1.14, -1.14],
                y: [-0.49, -0.49, -0.18, -1.24, -0.79, -0.49, -0.19, -0.17, 1.01, 0.57, 0.57],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [0.22, 0.22, 0.52, 1.27, 0.83, 0.39, 0.36, 0.52, 0.22, 0.66, 0.22, 0.37, 0.67, 0.03, 0.37, 0.74, 1.27],
                y: [-0.21, -0.21, -0.21, -0.38, -0.82, -1.26, -0.06, -0.21, -0.21, -0.07, -0.21, -0.36, -0.66, 1.74, -0.36, 3.07, -0.38],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [3.2, 4.39],
                y: [0.03, 0.3],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                }]},
        {name: '2021', data: [{
                x: [0.39, 0.55, 0.68, 0.84, 0.39, 0.09, 0.09, 0.09, 0.1, 0.1, -0.06, 0.99, 0.7, 0.09, -0.21, 0.1, 0.7, -0.21, 0.25],
                y: [-0.32, -0.17, -0.61, -0.16, -0.32, -0.62, -0.62, -0.62, -0.33, -0.33, -0.78, -0.31, -0.02, -0.62, -0.93, -0.33, -0.02, -0.93, -0.18],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [-0.93, -0.64, -0.64, -0.64, -0.49, -0.46, -0.79, -1.22],
                y: [-0.21, -0.2, -0.2, -0.2, -0.34, 0.84, -0.35, 0.08],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                },{
                x: [1.87, 4.7, 2.46],
                y: [-0.28, 0.53, -0.27],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                }]},
        {name: '2022', data: [{
                x: [0.18, -0.59, -1.33, -0.95, -0.07, -0.95, -0.95, -1.08, -1.08, -1.21, 0.18, -1.21, 0.19, 0.18, -1.08, -0.59, -1.08],
                y: [-0.65, -1.17, -0.18, -0.3, -0.4, -0.3, -0.3, -0.43, -0.43, -0.56, -0.4, -0.56, -0.14, -0.4, -0.43, -0.92, -0.17],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [2.6, 2.73, 2.73, 1.97, 2.6, 1.96, 1.58, 1.2, 2.21],
                y: [0.04, -0.09, -0.09, 0.15, 0.04, -0.36, -0.24, -0.37, -0.35],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [-0.41, -0.41, -0.29, -0.29],
                y: [1.24, 1.24, 1.11, 1.11],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                }]},
        {name: '2023', data: [{
                x: [-1.17, -1.47, 0.8, -1.17, -1.32, -0.41, 0.65, -0.41, -0.57, -0.41, -1.47, 0.8, -1.62, -0.86, 0.65, -1.01, 0.34, -0.26, 0.04, -0.26, -0.56, -0.57, 0.5, 0.8, 0.04],
                y: [-0.44, -0.44, -0.89, -0.44, -0.29, -0.89, -0.13, -0.59, -1.35, -0.59, -0.44, -0.89, -0.29, -0.74, -0.13, -0.29, -1.34, -0.44, -0.44, -0.44, -1.04, -1.35, -0.28, -0.89, -0.44],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [4.12, 1.55, 1.85, 1.85, 4.42],
                y: [-0.27, -0.43, -0.43, -0.43, 0.34],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                }]},
        {name: '2024', data: [{
                x: [-0.61, -0.61, 0.16, 0.03, -0.48, -1.13, -0.22, -1.26, -0.61, -0.61, 0.03, -0.61],
                y: [-0.27, -0.79, -0.28, -0.15, -0.4, -0.27, -0.4, -0.4, -0.27, -0.27, -0.15, -0.27],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 0'
                },{
                x: [3.0, 1.58, 3.77],
                y: [-0.03, -0.41, 0.22],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 1'
                },{
                x: [-1.01, -0.49, -0.49, -0.49, -0.49, -0.49, -0.49, -0.49, -0.49, -0.49, -0.49, -0.49, -0.49, 0.4, -0.11],
                y: [0.63, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 2.56, 2.05],
                mode: 'markers',
                type: 'scatter',
                name: 'Cluster 2'
                }]},
        ];

    // Convert clusterFrames to Plotly frames format
    var plotlyFrames = clusterFrames.map(f => ({ name: f.name, data: f.data }));

    // Initial data for the first frame
    var initialClusterData = clusterFrames[0].data;

    Plotly.newPlot('cluster-plot', initialClusterData, {
        title: 'Animated Clustering Over Time',
        xaxis: { title: 'PC1' },
        yaxis: { title: 'PC2' },
        updatemenus: [{
            type: 'buttons',
            showactive: false,
            buttons: [
                {
                    label: 'Play',
                    method: 'animate',
                    args: [null, {
                        fromcurrent: true,
                        frame: {duration: 1000, redraw: true},
                        transition: {duration: 300}
                    }]
                },
                {
                    label: 'Pause',
                    method: 'animate',
                    args: [[null], {
                        mode: 'immediate',
                        frame: {duration: 0},
                        transition: {duration: 0}
                    }]
                }
            ]
        }],
        sliders: [{
            active: 0,
            steps: clusterFrames.map(f => ({
                label: f.name,
                method: 'animate',
                args: [[f.name], {
                    mode: 'immediate',
                    frame: {duration: 300},
                    transition: {duration: 0}
                }]
            }))
        }]
    });

    // Add frames for animation (use DOM element for compatibility)
    Plotly.addFrames(document.getElementById('cluster-plot'), plotlyFrames);

    // --- Minimal dark mode toggle ---
    const toggleBtn = document.getElementById('theme-toggle');
    function updateToggleBtnText() {
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '🌞 Toggle Light Mode' : '🌙 Toggle Dark Mode';
    }
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateToggleBtnText();
    });
    updateToggleBtnText();

    // --- Chart dropdowns for all major charts ---
    // Helper to create dropdowns
    function setupChartDropdown(dropdownId, chartId, options, plotFn) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.innerHTML = '';
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.label;
            dropdown.appendChild(option);
        });
        dropdown.onchange = function() {
            plotFn(dropdown.value);
        };
        // Initial plot
        plotFn(dropdown.value || options[0].value);
    }

    // RDC Bar Chart
    setupChartDropdown('rdc-bar-dropdown', 'rdc-bar', [
        { value: 'bar', label: 'Bar Chart' },
        { value: 'line', label: 'Line Chart' },
        { value: 'scatter', label: 'Scatter Plot' }
    ], function(type) {
        let mode = type === 'line' ? 'lines+markers' : (type === 'scatter' ? 'markers' : undefined);
        Plotly.newPlot('rdc-bar', [{
            x: ["Boston", "Michigan", "Baruch", "Penn State", "Triangle", "Stanford", "Chicago", "Atlanta", "UIUC", "Kentucky"],
            y: [1444, 1342, 970, 869, 752, 725, 652, 551, 410, 351],
            type: type,
            mode: mode,
            marker: {color: type === 'bar' ? 'steelblue' : '#218c5b'}
        }], {
            title: 'Top 10 RDCs by Research Output (' + type.charAt(0).toUpperCase() + type.slice(1) + ')',
            xaxis: {title: 'RDC'},
            yaxis: {title: 'Number of Outputs'}
        });
    });

    // Publication Trend
    setupChartDropdown('pub-trend-dropdown', 'pub-trend', [
        { value: 'line', label: 'Line Chart' },
        { value: 'scatter', label: 'Scatter Plot' },
        { value: 'bar', label: 'Bar Chart' }
    ], function(type) {
        let mode = type === 'line' ? 'lines+markers' : (type === 'scatter' ? 'markers' : undefined);
        Plotly.newPlot('pub-trend', [{
            x: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
            y: [1, 2, 5, 12, 10, 20, 11, 19, 16, 22, 21, 33, 36, 35, 57, 58, 47, 46, 80, 100, 97, 108, 110, 125, 139, 158, 167, 130, 180, 163, 214, 156, 15],
            type: type,
            mode: mode,
            marker: {color: type === 'bar' ? 'crimson' : '#218c5b'}
        }], {
            title: 'Number of Publications per Year (' + type.charAt(0).toUpperCase() + type.slice(1) + ')',
            xaxis: {title: 'Year'},
            yaxis: {title: 'Publications'}
        });
    });

    // Authors Chart
    setupChartDropdown('top-authors-dropdown', 'top-authors', [
        { value: 'bar', label: 'Bar Chart' },
        { value: 'line', label: 'Line Chart' },
        { value: 'scatter', label: 'Scatter Plot' }
    ], function(type) {
        let mode = type === 'line' ? 'lines+markers' : (type === 'scatter' ? 'markers' : undefined);
        Plotly.newPlot('top-authors', [{
            x: ["J. Wang", "Z. Wang", "Y. Zhang", "J. Lee", "L. Zhang", "M. Finger", "Y. Chen", "A. Sharma", "S. Bhattacharya", "H. Kim"],
            y: [682, 485, 343, 323, 311, 294, 293, 288, 277, 264],
            type: type,
            mode: mode,
            marker: {color: type === 'bar' ? 'darkgreen' : '#218c5b'}
        }], {
            title: 'Top 10 Authors by FSRDC Outputs (' + type.charAt(0).toUpperCase() + type.slice(1) + ')',
            xaxis: {title: 'Author'},
            yaxis: {title: 'Publications'}
        });
    });

    // PCA Plot
    setupChartDropdown('pca-plot-dropdown', 'pca-plot', [
        { value: 'scatter', label: 'Scatter Plot' },
        { value: 'line', label: 'Line Chart' },
        { value: 'pca-outputtype', label: 'PCA by Output Type' },
        { value: 'kmeans-3', label: 'KMeans (3 clusters)' },
        { value: 'kmeans-4', label: 'KMeans (4 clusters)' },
        { value: 'dbscan', label: 'DBSCAN' },
        { value: 'tfidf-kmeans', label: 'TF-IDF KMeans (Text Clusters)' }
    ], function(type) {
        const tfidfSection = document.getElementById('tfidf-kmeans-section');
        const tfidfPlot = document.getElementById('tfidf-kmeans-plot');
        if (type === 'tfidf-kmeans') {
            tfidfSection.style.display = '';
            // Clear previous plot (important for Plotly)
            if (tfidfPlot) Plotly.purge(tfidfPlot);
            Plotly.newPlot('tfidf-kmeans-plot', tfidfKMeans, {
                title: 'TF-IDF KMeans Text Clustering',
                xaxis: { title: 'TF-IDF PC1' },
                yaxis: { title: 'TF-IDF PC2' }
            });
            // Hide main plot
            Plotly.purge('pca-plot');
        } else {
            tfidfSection.style.display = 'none';
            if (tfidfPlot) Plotly.purge(tfidfPlot);
            if (type === 'pca-outputtype') {
                Plotly.newPlot('pca-plot', pcaOutputType, {
                    title: 'PCA Projection by Output Type',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'kmeans-3') {
                Plotly.newPlot('pca-plot', kmeans3, {
                    title: 'KMeans Clustering (3 Clusters)',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'kmeans-4') {
                Plotly.newPlot('pca-plot', kmeans4, {
                    title: 'KMeans Clustering (4 Clusters)',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'dbscan') {
                Plotly.newPlot('pca-plot', dbscan, {
                    title: 'DBSCAN Clustering',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'scatter' || type === 'line') {
                let mode = type === 'line' ? 'lines+markers' : 'markers';
                Plotly.newPlot('pca-plot', [{
                    x: x_pca,
                    y: y_pca,
                    mode: mode,
                    type: type,
                    marker: {size: 6, color: 'teal'}
                }], {
                    title: 'PCA Projection of Research Outputs (' + type.charAt(0).toUpperCase() + type.slice(1) + ')',
                    xaxis: {title: 'Principal Component 1'},
                    yaxis: {title: 'Principal Component 2'}
                });
            }
        }
    });

    // Cluster Plot (animation only, so dropdown disables other types)
    setupChartDropdown('cluster-plot-dropdown', 'cluster-plot', [
        { value: 'animated', label: 'Animated Cluster Plot (KMeans)' }
    ], function(type) {
        // Only one type supported, so just re-plot the animation
        Plotly.newPlot('cluster-plot', initialClusterData, {
            title: 'Animated Clustering Over Time',
            xaxis: { title: 'PC1' },
            yaxis: { title: 'PC2' },
            updatemenus: [{
                type: 'buttons',
                showactive: false,
                buttons: [
                    {
                        label: 'Play',
                        method: 'animate',
                        args: [null, {
                            fromcurrent: true,
                            frame: {duration: 1000, redraw: true},
                            transition: {duration: 300}
                        }]
                    },
                    {
                        label: 'Pause',
                        method: 'animate',
                        args: [[null], {
                            mode: 'immediate',
                            frame: {duration: 0},
                            transition: {duration: 0}
                        }]
                    }
                ]
            }],
            sliders: [{
                active: 0,
                steps: clusterFrames.map(f => ({
                    label: f.name,
                    method: 'animate',
                    args: [[f.name], {
                        mode: 'immediate',
                        frame: {duration: 300},
                        transition: {duration: 0}
                    }]
                }))
            }]
        });
        Plotly.addFrames(document.getElementById('cluster-plot'), plotlyFrames);
    });

    // --- Filter table function ---
    function filterTable() {
        var input = document.getElementById("searchInput").value.toLowerCase();
        var rows = document.querySelectorAll("#outputTable tbody tr");
        var found = false;
        rows.forEach(row => {
            var match = false;
            for (let i = 0; i < row.cells.length; i++) {
                if (row.cells[i].textContent.toLowerCase().includes(input)) {
                    match = true;
                    break;
                }
            }
            row.style.display = match ? "" : "none";
            if (match) found = true;
        });
        document.getElementById("noResultsMsg").style.display = found ? "none" : "block";
    }
    
    // --- PCA & Clustering Data Arrays (updated with real data) ---
    // PCA by OutputType
    // --- PCA by OutputType ---

const pcaOutputType = [
    {
        x: x_pca,
        y: y_pca,
        mode: 'markers',
        type: 'scatter',
        name: 'OutputType',
        marker: {
            size: 7,
            color: outputType_x.map(type => {
                if (type === 'JA') return 'blue';
                if (type === 'WP') return 'green';
                if (type === 'BC') return 'orange';
                if (type === 'MI') return 'red';
                return 'gray';
            })
        },
        text: outputType_x // hover text will show output type
    }
];
    // KMeans (3 clusters)
    const kmeans3 = [
        {
            x: x_k3.filter((_,i) => Cluster_K3[i] === 0),
            y: y_k3.filter((_,i) => Cluster_K3[i] === 0),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 0',
            marker: { size: 7, color: '#1f77b4' }
        },
        {
            x: x_k3.filter((_,i) => Cluster_K3[i] === 1),
            y: y_k3.filter((_,i) => Cluster_K3[i] === 1),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 1',
            marker: { size: 7, color: '#ff7f0e' }
        },
        {
            x: x_k3.filter((_,i) => Cluster_K3[i] === 2),
            y: y_k3.filter((_,i) => Cluster_K3[i] === 2),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 2',
            marker: { size: 7, color: '#2ca02c' }
        }
    ];
    // KMeans (4 clusters)
    const kmeans4 = [
        {
            x: x_k4.filter((_,i) => Cluster_K4[i] === 0),
            y: y_k4.filter((_,i) => Cluster_K4[i] === 0),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 0',
            marker: { size: 7, color: '#1f77b4' }
        },
        {
            x: x_k4.filter((_,i) => Cluster_K4[i] === 1),
            y: y_k4.filter((_,i) => Cluster_K4[i] === 1),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 1',
            marker: { size: 7, color: '#ff7f0e' }
        },
        {
            x: x_k4.filter((_,i) => Cluster_K4[i] === 2),
            y: y_k4.filter((_,i) => Cluster_K4[i] === 2),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 2',
            marker: { size: 7, color: '#2ca02c' }
        },
        {
            x: x_k4.filter((_,i) => Cluster_K4[i] === 3),
            y: y_k4.filter((_,i) => Cluster_K4[i] === 3),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 3',
            marker: { size: 7, color: '#d62728' }
        }
    ];
    // DBSCAN
    const dbscan = [
        {
            x: x_db.filter((_,i) => Cluster_DB[i] === 0),
            y: y_db.filter((_,i) => Cluster_DB[i] === 0),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 0',
            marker: { size: 7, color: '#1f77b4' }
        },
        {
            x: x_db.filter((_,i) => Cluster_DB[i] === 1),
            y: y_db.filter((_,i) => Cluster_DB[i] === 1),
            mode: 'markers',
            type: 'scatter',
            name: 'Cluster 1',
            marker: { size: 7, color: '#ff7f0e' }
        },
        // Add more clusters as needed...
        {
            x: x_db.filter((_,i) => Cluster_DB[i] === -1),
            y: y_db.filter((_,i) => Cluster_DB[i] === -1),
            mode: 'markers',
            type: 'scatter',
            name: 'Noise',
            marker: { size: 7, color: '#7f7f7f', symbol: 'x' }
        }
    ];
    // TF-IDF KMeans
    const tfidfKMeans = [
    {
        x: x_tfidf.filter((_,i) => Cluster_TFIDF[i] === 0),
        y: y_tfidf.filter((_,i) => Cluster_TFIDF[i] === 0),
        mode: 'markers',
        type: 'scatter',
        name: 'Cluster 0',
        marker: { size: 7, color: '#1f77b4' }
    },
    {
        x: x_tfidf.filter((_,i) => Cluster_TFIDF[i] === 1),
        y: y_tfidf.filter((_,i) => Cluster_TFIDF[i] === 1),
        mode: 'markers',
        type: 'scatter',
        name: 'Cluster 1',
        marker: { size: 7, color: '#ff7f0e' }
    },
    {
        x: x_tfidf.filter((_,i) => Cluster_TFIDF[i] === 2),
        y: y_tfidf.filter((_,i) => Cluster_TFIDF[i] === 2),
        mode: 'markers',
        type: 'scatter',
        name: 'Cluster 2',
        marker: { size: 7, color: '#2ca02c' }
    },
    {
        x: x_tfidf.filter((_,i) => Cluster_TFIDF[i] === 3),
        y: y_tfidf.filter((_,i) => Cluster_TFIDF[i] === 3),
        mode: 'markers',
        type: 'scatter',
        name: 'Cluster 3',
        marker: { size: 7, color: '#d62728' }
    },
    {
        x: x_tfidf.filter((_,i) => Cluster_TFIDF[i] === 4),
        y: y_tfidf.filter((_,i) => Cluster_TFIDF[i] === 4),
        mode: 'markers',
        type: 'scatter',
        name: 'Cluster 4',
        marker: { size: 7, color: '#9467bd' }
    }
];
// --- DES Bottleneck Timeline Visualization ---
const desStages = ['Proposal Approval', 'Data Access Granted', 'Analysis & Review', 'Publication'];
const desDurations = [12, 18, 10, 8]; // example values: months spent at each stage
const desColors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728'];

Plotly.newPlot('des-plot', [{
    x: desStages,
    y: desDurations,
    type: 'bar',
    marker: {color: desColors}
}], {
    title: 'Simulated Median Duration per Project Stage (DES)',
    xaxis: {title: 'Project Lifecycle Stage'},
    yaxis: {title: 'Median Duration (Months)'}
});


    // --- PCA/Clustering Dropdown Logic ---
    setupChartDropdown('pca-plot-dropdown', 'pca-plot', [
        { value: 'pca-outputtype', label: 'PCA by Output Type' },
        { value: 'kmeans-3', label: 'KMeans (3 clusters)' },
        { value: 'kmeans-4', label: 'KMeans (4 clusters)' },
        { value: 'dbscan', label: 'DBSCAN' },
        { value: 'tfidf-kmeans', label: 'TF-IDF KMeans (Text Clusters)' }
    ], function(type) {
        const tfidfSection = document.getElementById('tfidf-kmeans-section');
        const tfidfPlot = document.getElementById('tfidf-kmeans-plot');
        if (type === 'tfidf-kmeans') {
            tfidfSection.style.display = '';
            // Clear previous plot (important for Plotly)
            if (tfidfPlot) Plotly.purge(tfidfPlot);
            Plotly.newPlot('tfidf-kmeans-plot', tfidfKMeans, {
                title: 'TF-IDF KMeans Text Clustering',
                xaxis: { title: 'TF-IDF PC1' },
                yaxis: { title: 'TF-IDF PC2' }
            });
            // Hide main plot
            Plotly.purge('pca-plot');
        } else {
            tfidfSection.style.display = 'none';
            if (tfidfPlot) Plotly.purge(tfidfPlot);
            if (type === 'pca-outputtype') {
                Plotly.newPlot('pca-plot', pcaOutputType, {
                    title: 'PCA Projection by Output Type',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'kmeans-3') {
                Plotly.newPlot('pca-plot', kmeans3, {
                    title: 'KMeans Clustering (3 Clusters)',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'kmeans-4') {
                Plotly.newPlot('pca-plot', kmeans4, {
                    title: 'KMeans Clustering (4 Clusters)',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'dbscan') {
                Plotly.newPlot('pca-plot', dbscan, {
                    title: 'DBSCAN Clustering',
                    xaxis: { title: 'PC1' },
                    yaxis: { title: 'PC2' }
                });
            } else if (type === 'scatter' || type === 'line') {
                let mode = type === 'line' ? 'lines+markers' : 'markers';
                Plotly.newPlot('pca-plot', [{
                    x: x_pca,
                    y: y_pca,
                    mode: mode,
                    type: type,
                    marker: {size: 6, color: 'teal'}
                }], {
                    title: 'PCA Projection of Research Outputs (' + type.charAt(0).toUpperCase() + type.slice(1) + ')',
                    xaxis: {title: 'Principal Component 1'},
                    yaxis: {title: 'Principal Component 2'}
                });
            }
        }
    });

    // Load word frequencies and render interactive word cloud
    fetch('fsrdc_word_freq.json')
      .then(response => response.json())
      .then(wordFreq => {
        const wordList = Object.entries(wordFreq).map(([word, freq]) => [word, freq]);
        WordCloud(document.getElementById('interactive-wordcloud'), {
          list: wordList,
          gridSize: 12,
          weightFactor: 8,
          fontFamily: 'Segoe UI, sans-serif',
          color: '#218c5b',
          backgroundColor: 'transparent',
          rotateRatio: 0.2,
          click: function(item) {
            alert(item[0] + ': ' + item[1] + ' occurrences');
          },
          hover: function(item, dimension, event) {
            const tooltip = document.getElementById('wordcloud-tooltip');
            if (item) {
              tooltip.style.display = 'block';
              tooltip.style.left = (event.pageX + 10) + 'px';
              tooltip.style.top = (event.pageY - 20) + 'px';
              tooltip.textContent = item[0] + ': ' + item[1];
            } else {
              tooltip.style.display = 'none';
            }
          }
        });
      });
});
