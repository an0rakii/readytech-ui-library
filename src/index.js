// export all components to build as a library
import "./styles/main.scss";

//
// components
//

import RtAlert from "./components/alert/alert.vue";
import RtAvatar from "./components/avatar/avatar.vue";
import RtBadge from "./components/badge/badge.vue";
import RtBottomNavigation from "./components/bottom-navigation/bottom-navigation.vue";
import RtBottomSheet from "./components/bottom-sheet/bottom-sheet.vue";
import RtBreadcrumbs from "./components/breadcrumbs/breadcrumbs.vue";
import RtButton from "./components/button/button.vue";
import RtCalendar from "./components/calendar/calendar.vue";
import RtCard from "./components/card/Card.vue";
import RtCheckbox from "./components/checkbox/checkbox.vue";
import RtColorPicker from "./components/color-picker/color-picker.vue";
import RtComboBox from "./components/combo-box/combo-box.vue";
import RtConfirmEdit from "./components/confirm input/confirm-edit.vue";
import RtDateInput from "./components/date-input/date-input.vue";
import RtDatePicker from "./components/date-picker/date-picker.vue";
import RtDialog from "./components/dialog/Dialog.vue";
import RtDivider from "./components/divider/Divider.vue";
import RtExpansionPanel from "./components/expansion-panel/expansion-panel.vue";
import RtFileInput from "./components/file-input/file-input.vue";
import RtFloatingButton from "./components/floating-button/floating-button.vue";
import RtForm from "./components/form/form.vue";
import RtGrid from "./components/grid/grid.vue";
import RtHeader from "./components/header/header.vue";
import RtHover from "./components/hover/hover.vue";
import RtIcon from "./components/icon/icon.vue";
import RtImage from "./components/image/image.vue";
import RtInfiniteScroll from "./components/infinite-scroll/infinite-scroll.vue";
import RtInput from "./components/input/input.vue";
import RtList from "./components/list/list.vue";
import RtMenu from "./components/menu/menu.vue";
import RtNavigationDrawer from "./components/navigation-drawer/navigation-drawer.vue";
import RtOtp from "./components/otp/otp.vue";
import RtOverlay from "./components/overlay/overlay.vue";
import RtPage from "./components/page/page.vue";
import RtPagination from "./components/pagination/pagination.vue";
import RtParallax from "./components/parallax/parallax.vue";
import RtPopover from "./components/popover/popover.vue";
import RtProgressCircle from "./components/progress-circle/progress-circle.vue";
import RtRadioGroup from "./components/radio-group/radio-group.vue";
import RtRangeSlider from "./components/range-slider/range-slider.vue";
import RtRatings from "./components/ratings/ratings.vue";
import RtSelect from "./components/select/select.vue";
import RtSelectAutocomplete from "./components/select-autocomplete/select-autocomplete.vue";
import RtSheet from "./components/sheet/sheet.vue";
import RtSlider from "./components/slider/slider.vue";
import RtSnackbar from "./components/snackbar/snackbar.vue";
import RtSpeedDial from "./components/speed-dial/speed-dial.vue";
import RtStepper from "./components/stepper/stepper.vue";
import RtSwitch from "./components/switch/switch.vue";
import RtSystemBar from "./components/system-bar/system-bar.vue";
import RtTable from "./components/table/table.vue";
import RtTabs from "./components/tabs/tabs.vue";
import RtTextArea from "./components/textarea/textArea.vue";
import RtTimeline from "./components/timeline/timeline.vue";
import RtTimePicker from "./components/timepicker/timepicker.vue";
import RtTimePickerUI from "./components/timepicker-ui/timepicker-ui.vue";
import RtToolBar from "./components/toolbar/toolbar.vue";
import RtTreeview from "./components/treeview/treeview.vue";
import RtContainer from "./components/container/container.vue";


// import { RtTimePicker, RtTimePickerUI } from "dist/readytech-ui-library.es";

export default {
    install: (app,options)=> {
        app.component("RtAlert", RtAlert);
        app.component("RtAvatar", RtAvatar);
        app.component("RtBadge", RtBadge);
        app.component("RtBottomNavigation", RtBottomNavigation);
        app.component("RtBottomSheet", RtBottomSheet);
        app.component("RtBreadcrumbs", RtBreadcrumbs);
        app.component("RtButton", RtButton);
        app.component("RtCalendar", RtCalendar);
        app.component("RtCard", RtCard);
        app.component("RtCheckbox", RtCheckbox);
        app.component("RtColorPicker", RtColorPicker);
        app.component("RtComboBox", RtComboBox);
        app.component("RtConfirmEdit", RtConfirmEdit);
        app.component("RtDateInput", RtDateInput);
        app.component("RtDatePicker", RtDatePicker);
        app.component("RtDialog", RtDialog);
        app.component("RtDivider", RtDivider);
        app.component("RtExpansionPanel", RtExpansionPanel);
        app.component("RtFileInput", RtFileInput);
        app.component("RtFloatingButton", RtFloatingButton);
        app.component("RtForm", RtForm);
        app.component("RtGrid", RtGrid);
        app.component("RtHeader", RtHeader);
        app.component("RtHover", RtHover);
        app.component("RtIcon", RtIcon);
        app.component("RtImage", RtImage);
        app.component("RtInfiniteScroll", RtInfiniteScroll);
        app.component("RtInput", RtInput);
        app.component("RtList", RtList);
        app.component("RtMenu", RtMenu);
        app.component("RtNavigationDrawer", RtNavigationDrawer);
        app.component("RtOtp", RtOtp);
        app.component("RtOverlay", RtOverlay);
        app.component("RtPage", RtPage);
        app.component("RtPagination", RtPagination);
        app.component("RtParallax", RtParallax);
        app.component("RtPopover", RtPopover);
        app.component("RtProgressCircle", RtProgressCircle);
        app.component("RtRadioGroup", RtRadioGroup);
        app.component("RtRangeSlider", RtRangeSlider);
        app.component("RtRatings", RtRatings);
        app.component("RtSelect", RtSelect);
        app.component("RtSelectAutocomplete", RtSelectAutocomplete);
        app.component("RtSheet", RtSheet);
        app.component("RtSlider", RtSlider);
        app.component("RtSnackbar", RtSnackbar);
        app.component("RtSpeedDial", RtSpeedDial);
        app.component("RtStepper", RtStepper);
        app.component("RtSwitch", RtSwitch);
        app.component("RtSystemBar", RtSystemBar);
        app.component("RtTable", RtTable);
        app.component("RtTabs", RtTabs);
        app.component("RtTextArea", RtTextArea);
        app.component("RtTimeline", RtTimeline);
        app.component("RtTimePicker", RtTimePicker);
        app.component("RtTimePickerUI", RtTimePickerUI);
        app.component("RtToolBar", RtToolBar);
        app.component("RtTreeview", RtTreeview);
        app.component("RtContainer", RtContainer);
    }
};

// export {InputTaras} 