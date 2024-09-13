function init() {
    let map = new ymaps.Map('map', {
        center: [55.86367030548609,37.47535347821564],
        zoom: 16,
        behaviors: ['multiTouch', 'drag', 'scrollZoom']
    });

    let placemark = new ymaps.Placemark([55.86283919385704,37.47360467793794], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/placemark.png',
        iconImageSize: [119, 31],
        iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); //удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил

    map.geoObjects.add(placemark);

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        map.behaviors.disable('drag');
        map.behaviors.enable('multiTouch');
    }
}

ymaps.ready(init);