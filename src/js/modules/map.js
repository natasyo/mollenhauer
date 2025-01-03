import $ from "jquery";
const YaMapsShown = false;

$(window).on("scroll", function () {
  if (!YaMapsShown) {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 700
    ) {
      showYaMaps();
      YaMapsShown = true;
    }
  }
});

function showYaMaps() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=663dd5d2-0cb8-4659-b6c1-376b4e4bfd7e";
  $("#yaMap").replaceWith(script);

  ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
        center: [55.751574, 37.573856],
        zoom: 9,
      }),
      // Создаём макет содержимого.
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
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          // iconImageHref: "images/myIcon.gif",
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      );

    myMap.geoObjects.add(myPlacemark);
  });
}
