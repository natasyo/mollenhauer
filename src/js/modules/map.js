import $ from "jquery";
const YaMapsShown = false;
$(window).scroll(function () {
  if (!YaMapsShown) {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 100
    ) {
      ymaps.ready(function () {
        var myMap = new ymaps.Map("map", {
            center: [55.751574, 37.573856],
            zoom: 9,
          }),
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: red; font-weight: bold;">$[properties.iconContent]</div>'
          ),
          myPlacemark = new ymaps.Placemark(
            myMap.getCenter(),
            {
              hintContent: "Собственный значок метки",
              balloonContent: "Это красивая метка",
            },
            {
              iconLayout: "default#image",
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38],
            }
          );

        myMap.geoObjects.add(myPlacemark);
      });
      YaMapsShown = true;
    }
  }
});
