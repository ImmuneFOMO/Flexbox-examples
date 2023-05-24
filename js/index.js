document.addEventListener("DOMContentLoaded", function () {
  const dropdown_display = document.getElementById("display");
  const flex_container = document.getElementById("flexContainer");
  const dropdown_justify = document.getElementById("justify-content");
  const flex_container_justify = document.getElementById("flex-cont-justify");
  const dropdown_align_items = document.getElementById("align-items");
  const flex_container_align_items = document.getElementById("align-item");
  const dropdown_flex_wrap = document.getElementById("flex-wrap");
  const flex_container_flex_wrap = document.getElementById(
    "flex-wrap-container"
  );
  const dropdown_flex_direction = document.getElementById("flex-direction");
  const flex_container_flex_direction = document.getElementById(
    "flex-direction-container"
  );

  dropdown_flex_direction.addEventListener("change", function () {
    const selected_option = this.value;
    flex_container_flex_direction.style.flexDirection = selected_option;
  });
  dropdown_flex_wrap.addEventListener("change", function () {
    const selected_option = this.value;
    flex_container_flex_wrap.style.flexWrap = selected_option;
  });
  dropdown_align_items.addEventListener("change", function () {
    const selected_option = this.value;
    flex_container_align_items.style.alignItems = selected_option;
  });
  dropdown_justify.addEventListener("change", function () {
    const selected_option = this.value;
    flex_container_justify.style.justifyContent = selected_option;
  });
  dropdown_display.addEventListener("change", function () {
    const selected_option = this.value;
    flex_container.style.display = selected_option;
  });
});
