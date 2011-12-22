// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
  backgroundColor: '#CCCCCC'
});

var PrettyCharts = require('com.gnddesign.prettycharts');
var chart1 = PrettyCharts.createChart({
	// 左側のデータ
	leftChartType: 0,　// 0:棒グラフ 1:折れ線グラフ
	leftChartColor: 2, // 0:青 1:緑 2:赤 3:オレンジ 4: 黄 5:紫
    leftDataTitle: "体重", // データ名称
    leftDataUnit: "kg", // 単位
    leftDataArray: [ 100, 115, 132, 153, 114, 246, 99, 196, 209, 211, 248, 115, 132, 153, 123, 132, 196, 209, 211, 173, 99, 123, 132, 114, 246, 173, 248],

	// 右側のデータ
	rightDataEnabled: false,
	rightChartType: 1,
	rightChartColor: 0,
    rightDataTitle: "身長",
    rightDataUnit: "cm",
    rightDataArray: [ 246, 218, 100, 115, 132, 153, 114, 146, 118, 99, 173, 99, 115, 132, 153, 114, 123, 132, 96, 109, 93, 82, 116, 159, 211, 100, 211],
    top: 0,
    left: 0,
    width: 320, // required
    height: 179, // required
});

var chart2 = PrettyCharts.createChart({
	leftChartType: 1,
	leftChartColor: 1,
    leftDataTitle: "体重",
    leftDataUnit: "kg",
    leftDataArray: [ 230, 221, 232, 191, 174, 246, 173, 99, 123, 132, 196, 209, 211, 248],

	// 右側のデータ
	rightDataEnabled: true,
	rightChartType: 1,
	rightChartColor: 3,
    rightDataTitle: "身長",
    rightDataUnit: "cm",
    rightDataArray: [ 93, 99, 123, 132, 141, 169, 171, 231, 191, 132, 153, 114, 246, 218],
    top: 180,
    left: 0,
    width: 320, // required
    height: 280, // required
});


window.add(chart1);
window.add(chart2);
window.open();
