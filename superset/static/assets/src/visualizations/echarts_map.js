import echarts from 'echarts';
import china from 'echarts/map/js/china';
import anhui from 'echarts/map/js/province/anhui'
import aomen from 'echarts/map/js/province/aomen'
import beijing from 'echarts/map/js/province/beijing'
import chongqing from 'echarts/map/js/province/chongqing'
import fujian from 'echarts/map/js/province/fujian'
import gansu from 'echarts/map/js/province/gansu'
import guangdong from 'echarts/map/js/province/guangdong'
import guangxi from 'echarts/map/js/province/guangxi'
import guizhou from 'echarts/map/js/province/guizhou'
import hainan from 'echarts/map/js/province/hainan'
import hebei from 'echarts/map/js/province/hebei'
import heilongjiang from 'echarts/map/js/province/heilongjiang'
import henan from 'echarts/map/js/province/henan'
import hubei from 'echarts/map/js/province/hubei'
import hunan from 'echarts/map/js/province/hunan'
import jiangsu from 'echarts/map/js/province/jiangsu'
import jiangxi from 'echarts/map/js/province/jiangxi'
import jilin from 'echarts/map/js/province/jilin'
import liaoning from 'echarts/map/js/province/liaoning'
import neimenggu from 'echarts/map/js/province/neimenggu'
import ningxia from 'echarts/map/js/province/ningxia'
import qinghai from 'echarts/map/js/province/qinghai'
import shandong from 'echarts/map/js/province/shandong'
import shanghai from 'echarts/map/js/province/shanghai'
import shanxi from 'echarts/map/js/province/shanxi'
import shanxi1 from 'echarts/map/js/province/shanxi1'
import sichuan from 'echarts/map/js/province/sichuan'
import taiwan from 'echarts/map/js/province/taiwan'
import tianjin from 'echarts/map/js/province/tianjin'
import xianggang from 'echarts/map/js/province/xianggang'
import xinjiang from 'echarts/map/js/province/xinjiang'
import xizang from 'echarts/map/js/province/xizang'
import yunnan from 'echarts/map/js/province/yunnan'
import zhejiang from 'echarts/map/js/province/zhejiang'

function echartsChinaMapVis(slice, payload) {
    const div = d3.select(slice.selector);
    const sliceId = 'echarts_slice_' + slice.formData.slice_id;
    const html = '<div id=' + sliceId + ' style="width:' + slice.width() + 'px;height:' + slice.height() + 'px;"></div>';
    div.html(html);

    const myChart = echarts.init(document.getElementById(sliceId));

    const gateData = payload.data;
    const dataValue = gateData[0];
    const dataName = gateData[1];
    const maxData = gateData[2];
    const minData = gateData[3];

    const option = {
        title: {
            subtext: '点击进入下一级，双击返回中国地图',
            x: 'center',
            bottom: '5%',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c}',
        },
        visualMap: {
            type: 'continuous',
            min: minData,
            max: maxData,
            right: '-15%',
            inRange: {
                color: ['#d0f4fc', '#a9dbf6', '#9cd3f4', '#93cdf3', '#83c2f0', '#6eb5ed', '#51a2e9'],
            },
        },
        series: [{
            type: 'map',
            map: 'china',
            selectedMode: 'single',
            roam: 'scale',
            data: dataValue,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#b6a38a'
                    },
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#ff6347'
                    },
                },
            },
            itemStyle: {
                emphasis: {
                    areaColor: '#2e4783',
                    borderWidth: 0,
                },
            },
        },
        ],
    };
    myChart.setOption(option);
    myChart.on('mouseover',
    function(params) {
        const dataIndex = params.dataIndex;
    });
    myChart.on('click',
    function(chinaParam) {
        var provence = new Array("北京","上海","天津","重庆","河北","山西","内蒙古","辽宁","吉林","黑龙江","江苏",
            "浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","四川","贵州","云南","西藏","甘肃",
            "宁夏","青海","新疆","香港","澳门","台湾","陕西")
        if (chinaParam.name === chinaParam.name && provence.indexOf(chinaParam.name) > -1) {
            const option1 = myChart.getOption();
            option1.series[0].map = chinaParam.name;
            myChart.setOption(option1);
        }
    });
    myChart.on('dblclick',
    function() {
        if (myChart.getOption().series[0].map !== 'china') {
            const option1 = myChart.getOption();
            option1.series[0].map = 'china';
            myChart.setOption(option1);
        }
    });
}

module.exports = echartsChinaMapVis;