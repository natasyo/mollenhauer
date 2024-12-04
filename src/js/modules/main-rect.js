import $ from "jquery";

if ($(window).width() < 1728) {
  const rect = $(".main-layout__rect");
  // const structuralHeight = $(".structural");
  const rectSize = $(window).width() * Math.sqrt(2);
  const left = (rectSize * Math.sqrt(2) - rectSize) / 2;
  rect.width(rectSize);
  rect.height(rectSize);
  $(rect).css("left", `${left}px`);
  $(rect).css("bottom", `${-rectSize / 2}px`);
  $(rect).css("top", `unset`);
}
