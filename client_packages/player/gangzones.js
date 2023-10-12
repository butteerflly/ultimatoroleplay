/*const positions = [
    { 'position': { 'x': -200.8397, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -100.8397, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -0.8397, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 99.1603, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -200.8397, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -100.8397, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -0.8397, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 99.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 199.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 299.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 399.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 499.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -200.8397, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -100.8397, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -0.8397, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 99.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 199.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 299.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 399.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 499.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 599.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -100.8397, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -0.8397, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 99.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 199.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 299.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 399.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 499.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 599.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': -0.8397, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 99.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 199.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 299.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 399.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 499.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 599.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 99.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 199.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 299.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 399.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 499.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 599.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 199.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 299.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 399.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 499.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 299.1603, 'y': -2131.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 399.1603, 'y': -2131.556, 'z': 30.18104 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1068.898, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1068.898, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1068.898, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1068.898, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1068.898, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1068.898, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1168.898, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1268.898, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 968.8984, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1168.898, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1268.898, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1368.898, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 768.8984, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 868.8984, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1168.898, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1268.898, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1368.898, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1268.898, 'y': -1501.556, 'z': 28.17772 }, 'color': 10 },
	{ 'position': { 'x': 1368.898, 'y': -1501.556, 'z': 28.17772 }, 'color': 10 },
]

var blips = [];
mp.events.add('loadCaptureBlips', function (json) {
    var colors = JSON.parse(json);
    for (var i = 0; i < colors.length; i++) {
        positions[i].color = colors[i];
    }
    positions.forEach(element => {
        const blip = mp.game.ui.addBlipForRadius(element.position.x, element.position.y, element.position.z, 50);
        mp.game.invoke(getNative("SET_BLIP_SPRITE"), blip, 5);
        mp.game.invoke(getNative("SET_BLIP_ALPHA"), blip, 175);
        mp.game.invoke(getNative("SET_BLIP_COLOUR"), blip, element.color);
        blips.push(blip);
    });
});

var isCapture = false;
var captureAtt = 0;
var captureDef = 0;
var captureMin = 0;
var captureSec = 0;

mp.events.add('sendCaptureInformation', function (att, def, min, sec) {
    captureAtt = att;
    captureDef = def;
    captureMin = min;
    captureSec = sec;
});

mp.events.add('captureHud', function (argument) {
    isCapture = argument;
});

mp.events.add('setZoneColor', function (id, color) {
    if (blips.length == 0) return;
    mp.game.invoke(getNative("SET_BLIP_COLOUR"), blips[id], color);
});
mp.events.add('setZoneFlash', function (id, state, color) {
    if (blips.length == 1 || blips.length == 0) {
        if (state) {
            const blip = mp.game.ui.addBlipForRadius(positions[id].position.x, positions[id].position.y, positions[id].position.z, 50);
            mp.game.invoke(getNative("SET_BLIP_SPRITE"), blip, 5);
            mp.game.invoke(getNative("SET_BLIP_ALPHA"), blip, 175);
            mp.game.invoke(getNative("SET_BLIP_COLOUR"), blip, color);
            blips[id] = blip;
        }
        else {
            if (blips.length == 0) return;
            mp.game.invoke(getNative("SET_BLIP_ALPHA"), blips[id], 0);
        }
    }

    mp.game.invoke(getNative("SET_BLIP_FLASH_TIMER"), blips[id], 1000);
    mp.game.invoke(getNative("SET_BLIP_FLASHES"), blips[id], state);
});
*/

var isCapture = false;
var captureAtt = 0;
var captureDef = 0;
var captureMin = 0;
var captureSec = 0;

mp.events.add('sendCaptureInformation', function (att, def, min, sec) {
    captureAtt = att;
    captureDef = def;
    captureMin = min;
    captureSec = sec;
});

mp.events.add('captureHud', function (argument) {
    isCapture = argument;
});

var zonestatus =
{
    active: false,
    capDef: 0,
    capAtt: 0,
    capMin: 0,
    capSec: 0,
}
//var capti = mp.browsers.new('package://cef/hudcapt.html');

mp.events.add('render', () => {
    if (isCapture) {
        if (zonestatus.active == false)
        {
            zonestatus.active = true;
            mp.gui.execute(`gangzone.show()`);
            
        }
        if (captureDef !== zonestatus.capDef || captureAtt !== zonestatus.capAtt)
        {
            zonestatus.capAtt = captureAtt;
            zonestatus.capDef = captureDef;
            mp.gui.execute(`gangzone.att=${captureAtt}`);
            mp.gui.execute(`gangzone.def=${captureDef}`);
           
        }
        if (captureMin !== zonestatus.capMin || captureSec !== zonestatus.capSec)
        {
            zonestatus.capMin = captureMin;
            zonestatus.capSec = captureSec;
            mp.gui.execute(`gangzone.min=${captureMin}`);
            mp.gui.execute(`gangzone.sec=${captureSec}`);
            
        }
    }
    else
    {
        if (zonestatus.active == true)
        {
            zonestatus.active = false;
            mp.gui.execute(`gangzone.hide()`);
            
        }
    }
});

mp.events.add('quitcmd', function () {
    mp.events.callRemote('kickclient');
});