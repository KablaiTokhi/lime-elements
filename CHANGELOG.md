## [26.7.3](https://github.com/Lundalogik/lime-elements/compare/v26.7.2...v26.7.3) (2020-02-25)


### Bug Fixes

* **array-field-collapsible-item:** open when deep empty ([de8657a](https://github.com/Lundalogik/lime-elements/commit/de8657aeee4c81f0ebfb1109d96d930df8666638))

## [26.7.2](https://github.com/Lundalogik/lime-elements/compare/v26.7.1...v26.7.2) (2020-02-24)


### Bug Fixes

* **limel-picker:** render picker dropdown in document.body ([8d10cf1](https://github.com/Lundalogik/lime-elements/commit/8d10cf1bd2762ff930db50f6adb77d009eb62500)), closes [Lundalogik/crm-feature#971](https://github.com/Lundalogik/crm-feature/issues/971)

## [26.7.1](https://github.com/Lundalogik/lime-elements/compare/v26.7.0...v26.7.1) (2020-02-21)


### Bug Fixes

* **input-field:** prevent changing number onwheel event ([1f93faa](https://github.com/Lundalogik/lime-elements/commit/1f93faaebe9b9fd05e38e8091277c6d0e0a25b4a))

# [26.7.0](https://github.com/Lundalogik/lime-elements/compare/v26.6.0...v26.7.0) (2020-02-21)


### Bug Fixes

* **form-common:** choose title by title, name, first required field or the first nonempty string ([5ee4ebf](https://github.com/Lundalogik/lime-elements/commit/5ee4ebfaf2f6df481add4c8bc5221186e0de8cb1))


### Features

* **array-field-collapsible-item:** expand collapsible section when new item ([0eda04a](https://github.com/Lundalogik/lime-elements/commit/0eda04a1ae7d71aab81308cc0454f941c9bd3f60))

# [26.6.0](https://github.com/Lundalogik/lime-elements/compare/v26.5.3...v26.6.0) (2020-02-18)


### Bug Fixes

* **dialog:** set dialog surface to 100% height ([3018d5b](https://github.com/Lundalogik/lime-elements/commit/3018d5b8ab5c83a0e7d20a0a236446d5b34f2079)), closes [#590](https://github.com/Lundalogik/lime-elements/issues/590)


### Features

* **input-field:** add support for textarea ([701e1b3](https://github.com/Lundalogik/lime-elements/commit/701e1b3f857b062c06debed828db6b4b464d6d0a))

## [26.5.3](https://github.com/Lundalogik/lime-elements/compare/v26.5.2...v26.5.3) (2020-02-18)


### Bug Fixes

* prevent multiple instances of docz ([736360b](https://github.com/Lundalogik/lime-elements/commit/736360b556068c1c931d1c9ec7cc10e754855a6a))

## [26.5.2](https://github.com/Lundalogik/lime-elements/compare/v26.5.1...v26.5.2) (2020-02-13)


### Bug Fixes

* **text-field:** show error icon ([5b00ae5](https://github.com/Lundalogik/lime-elements/commit/5b00ae521192af7e27b00521acc94e38a36a11ad))

## [26.5.1](https://github.com/Lundalogik/lime-elements/compare/v26.5.0...v26.5.1) (2020-02-06)


### Bug Fixes

* **form:** do not emit empty strings from input field ([45b4f3f](https://github.com/Lundalogik/lime-elements/commit/45b4f3f5817990b3e0ea7c2e3283359d56137045))
* **form:** set fields to invalid if they have initial invalid data ([2cc6a19](https://github.com/Lundalogik/lime-elements/commit/2cc6a19564136c4fa50dc6211d4a0e0b9458fba1))

# [26.5.0](https://github.com/Lundalogik/lime-elements/compare/v26.4.1...v26.5.0) (2020-02-06)


### Bug Fixes

* **form:** set unique id in schema ([47c080f](https://github.com/Lundalogik/lime-elements/commit/47c080f86c74de132632ba26ba71295f3f717515))


### Features

* **form:** release form component ([0f988b3](https://github.com/Lundalogik/lime-elements/commit/0f988b3861e928f3fdcfeaa7cebc1d37afde8a31))

## [26.4.1](https://github.com/Lundalogik/lime-elements/compare/v26.4.0...v26.4.1) (2020-02-05)


### Bug Fixes

* **select:** show arrow in the dropdown ([04e701c](https://github.com/Lundalogik/lime-elements/commit/04e701c4c6f10c8fab1f1964f1fcd6d013d0770a))

# [26.4.0](https://github.com/Lundalogik/lime-elements/compare/v26.3.0...v26.4.0) (2020-02-05)


### Bug Fixes

* **select:** adjust placement of floating label to match input-field component ([ec17e42](https://github.com/Lundalogik/lime-elements/commit/ec17e42f824a2de2c099b63d7daac87677723936))
* **select:** correct default selection, which was broken in v26.1.1 ([fd4dffc](https://github.com/Lundalogik/lime-elements/commit/fd4dffc017f83ac1f89f75bb773fb97c8e53ff61)), closes [#573](https://github.com/Lundalogik/lime-elements/issues/573)
* **select:** do not emit change event when component is mounted ([5fc1f19](https://github.com/Lundalogik/lime-elements/commit/5fc1f1959d84f682c915f986ada07a99a9a67d48)), closes [#574](https://github.com/Lundalogik/lime-elements/issues/574) [#573](https://github.com/Lundalogik/lime-elements/issues/573)
* **select:** fix `disabled` state that was broken in v26.1.1 ([c4e9dce](https://github.com/Lundalogik/lime-elements/commit/c4e9dce132bba04cb9387ec623ad3d131d62d313))


### Features

* **collapsible-section:** add support for actions in the header ([ddca821](https://github.com/Lundalogik/lime-elements/commit/ddca82191768636dfbe3789a5abe40e517054dcd))
* **collapsible-section:** background-color and padding can now be set using CSS variables ([b8d60cd](https://github.com/Lundalogik/lime-elements/commit/b8d60cd169f1be10bcff012676dde73e406e23d5)), closes [Lundalogik/crm-feature#968](https://github.com/Lundalogik/crm-feature/issues/968)
* **form:** add component for array items ([2c73e62](https://github.com/Lundalogik/lime-elements/commit/2c73e626ebbfc59536128788aa9cfd5737326e3b))
* **form:** add template for object fields ([ee8d9c3](https://github.com/Lundalogik/lime-elements/commit/ee8d9c3fd77cd643ad3aeec4a954b151f8aa2f54))
* **form:** set validation errors as helper text when invalid ([a5e5c28](https://github.com/Lundalogik/lime-elements/commit/a5e5c28bdd723cb7abfc9149621c66999027b881))

# [26.3.0](https://github.com/Lundalogik/lime-elements/compare/v26.2.0...v26.3.0) (2020-01-27)


### Bug Fixes

* **form:** convert dates to strings in date-picker change handler ([d94f6cc](https://github.com/Lundalogik/lime-elements/commit/d94f6ccb3f052a4c79b8f193116da233aab95900))
* **form:** remove double titles and descriptions from form fields ([f446ce4](https://github.com/Lundalogik/lime-elements/commit/f446ce4defd21c55238fd573ccd681a1e4396e6d))
* **select:** adjust bottom margin ([a1067b9](https://github.com/Lundalogik/lime-elements/commit/a1067b9c622a6ccdbb54364c0cea16e1e39f715f))


### Features

* **form:** add validation event ([eb8add2](https://github.com/Lundalogik/lime-elements/commit/eb8add2442e5149d243ad90ef2f0aaf381f141f2))

# [26.2.0](https://github.com/Lundalogik/lime-elements/compare/v26.1.1...v26.2.0) (2020-01-23)


### Features

* **checkbox:** add required property ([68f371d](https://github.com/Lundalogik/lime-elements/commit/68f371dfbbf5c085e2ab00ee6dacff9714221e66))
* **date-picker:** add helperText property ([5e47129](https://github.com/Lundalogik/lime-elements/commit/5e4712904573a4c95f2711f1df1699df58262838))
* **form:** add component for handling boolean values ([74d885f](https://github.com/Lundalogik/lime-elements/commit/74d885f50f7f75d5472a2b89ecc4711a9b160975))
* **form:** add component for handling date values ([cdd7d00](https://github.com/Lundalogik/lime-elements/commit/cdd7d0087251a61e3bddb00fdcabcf8ecffe59aa))
* **form:** add component for handling enum values ([6120929](https://github.com/Lundalogik/lime-elements/commit/6120929521ba96decc428dacc9a34c4f8e6520db))
* **form:** add component for handling text inputs ([317e654](https://github.com/Lundalogik/lime-elements/commit/317e654b4c065bb36661bd64622c610360f96a46))
* **input-field:** improve validation ([4afe197](https://github.com/Lundalogik/lime-elements/commit/4afe197141a3aa208689d3655d0a0b3d48268373))
* **select:** add helperText property ([8b3f26c](https://github.com/Lundalogik/lime-elements/commit/8b3f26c0ec223cb9f7e9299b1dc7d5f953667c92))

## [26.1.1](https://github.com/Lundalogik/lime-elements/compare/v26.1.0...v26.1.1) (2020-01-22)


### Bug Fixes

* **select:** make select work on mobile devices again ([4cf7a0e](https://github.com/Lundalogik/lime-elements/commit/4cf7a0e60a34745544397159b5507a2d7c0e6f1f))

# [26.1.0](https://github.com/Lundalogik/lime-elements/compare/v26.0.3...v26.1.0) (2020-01-21)


### Features

* **form:** first basic version of form component (unreleased) ([409d20e](https://github.com/Lundalogik/lime-elements/commit/409d20e8ef68c8fc00da12650daba77c37065775))

## [26.0.3](https://github.com/Lundalogik/lime-elements/compare/v26.0.2...v26.0.3) (2020-01-09)


### Bug Fixes

* **select:** don't set focus on first item if null ([6b84454](https://github.com/Lundalogik/lime-elements/commit/6b84454b546adcbd36535ad426631d983377dccd))

## [26.0.2](https://github.com/Lundalogik/lime-elements/compare/v26.0.1...v26.0.2) (2019-12-19)


### Bug Fixes

* **list:** update template for single line list items ([15d7a9e](https://github.com/Lundalogik/lime-elements/commit/15d7a9e77f22e71b1bf3bec403db3d764fd4b0b7))

## [26.0.1](https://github.com/Lundalogik/lime-elements/compare/v26.0.0...v26.0.1) (2019-12-12)


### Bug Fixes

* **button:** update markup to satisfy changes in material 4.0.0 ([58dbb4d](https://github.com/Lundalogik/lime-elements/commit/58dbb4dddca31aefcac87d275268794188fb3c9e))
* **chip-set:** adjust top margin of label in input field ([7de29cc](https://github.com/Lundalogik/lime-elements/commit/7de29cc83dc58705e43657887472da4db7d242eb)), closes [#402](https://github.com/Lundalogik/lime-elements/issues/402)
* **chip-set:** update markup to satisfy changes in material 4.0.0 ([041dfcb](https://github.com/Lundalogik/lime-elements/commit/041dfcb6d126bb623d4637f095d2e46b68fae415)), closes [#402](https://github.com/Lundalogik/lime-elements/issues/402)
* **dialog:** set height of surface to 100% in fullscreen mode ([2d7b0a1](https://github.com/Lundalogik/lime-elements/commit/2d7b0a1abe5112abe3adf59833d8b08a5c64a7b8)), closes [#402](https://github.com/Lundalogik/lime-elements/issues/402)
* **list:** do not filter disabled list items ([b0bd2df](https://github.com/Lundalogik/lime-elements/commit/b0bd2dfb0ce706694630c028e7fe0e35e24cbc84)), closes [#402](https://github.com/Lundalogik/lime-elements/issues/402)
* **package:** update @limetech/material-components-web to version 2.3.1 ([1a724ee](https://github.com/Lundalogik/lime-elements/commit/1a724eec729f961352e7675fd2f3a34107cc603b))
* **package:** update @limetech/material-components-web to version 3.1.1 ([8d4bdcf](https://github.com/Lundalogik/lime-elements/commit/8d4bdcf4f3b49089c4aafb38d60c0d82e00365d3)), closes [#402](https://github.com/Lundalogik/lime-elements/issues/402)
* **package:** update @limetech/material-components-web to version 4.0.0 ([4d08006](https://github.com/Lundalogik/lime-elements/commit/4d08006ce28a976204a4bc7b0fedacecab7860e2))
* **select:** change should not fire when option is disabled ([90e8e0a](https://github.com/Lundalogik/lime-elements/commit/90e8e0acff885923a26d0f2824dc933204d1569a)), closes [#402](https://github.com/Lundalogik/lime-elements/issues/402)

# [26.0.0](https://github.com/Lundalogik/lime-elements/compare/v25.2.0...v26.0.0) (2019-12-06)


### Features

* **grid:** set default row height to 2.5rem (40px) ([8c1a818](https://github.com/Lundalogik/lime-elements/commit/8c1a818137dcb9c545acd07ff10d2dff9a09cd86))


### BREAKING CHANGES

* **grid:** The default row height of the limel-grid component has been set to 2.5rem (40px).
The row height of any given instance of limel-grid can be set using the `--lime-grid-cell-height`
CSS variable.

# [25.2.0](https://github.com/Lundalogik/lime-elements/compare/v25.1.1...v25.2.0) (2019-12-06)


### Features

* **dialog:** indicate scrollable content via a shadow ([0855358](https://github.com/Lundalogik/lime-elements/commit/08553588517eeceb298607c55f3a5e6dc1430642)), closes [#312](https://github.com/Lundalogik/lime-elements/issues/312)

## [25.1.1](https://github.com/Lundalogik/lime-elements/compare/v25.1.0...v25.1.1) (2019-12-03)


### Bug Fixes

* **dialog:** prevent header from shrinking due to large body ([d5707dd](https://github.com/Lundalogik/lime-elements/commit/d5707ddabf7a374bf6d48109fc43512d10307474))

# [25.1.0](https://github.com/Lundalogik/lime-elements/compare/v25.0.0...v25.1.0) (2019-11-28)


### Features

* **input-field:** add support for a helper text next to the input field ([10ba5e5](https://github.com/Lundalogik/lime-elements/commit/10ba5e591de5d444555847a20971444015803e87))

# [25.0.0](https://github.com/Lundalogik/lime-elements/compare/v24.6.2...v25.0.0) (2019-11-14)


### Bug Fixes

* **grid:** change default number of columns from 8 to 4 ([e40ce9a](https://github.com/Lundalogik/lime-elements/commit/e40ce9a0c4e0dcd61482284aba7f7ebce8f1aa38))
* **grid:** make sure the size of the grid is the same as the size of the `limel-grid` element ([b13be87](https://github.com/Lundalogik/lime-elements/commit/b13be878b78ab8a7977abe7acfc3cab1d3cf536c))
* **grid:** remove variable `--lime-grid-cell-width` ([b1b54de](https://github.com/Lundalogik/lime-elements/commit/b1b54defd294c8b25590086e11c8c8f9c7dafc22))
* **grid:** set `grid-auto-flow` to `row dense`, for better automatic layout if config is missing ([ade4f59](https://github.com/Lundalogik/lime-elements/commit/ade4f59f948e9e1aad05c26ff9d84c8a340cb229))


### Features

* **grid:** add variable `--lime-grid-gutter` with default of `16px`, for setting gutter width ([f88b968](https://github.com/Lundalogik/lime-elements/commit/f88b968226c7b0428de4ae3206db532db886fadc))
* **grid:** change default row height from 150px to 64px ([89648c2](https://github.com/Lundalogik/lime-elements/commit/89648c228fda09bef3af58989dcc41abb55ecffa))


### BREAKING CHANGES

* **grid:** The default row height for `limel-grid` has been changed from 150px to 64px.
* **grid:** The gutter width of limel-grid used to be hard-coded to 15px. The default value is
now 16px, but the value can be now be configured using the `--lime-grid-gutter` variable.
* **grid:** It is no longer possible to set a minimum column width. The column width is now
determined automatically from the width of the component, and the number of columns used.
* **grid:** The default number of columns for `limel-grid` has changed from `8` to `4`.

## [24.6.2](https://github.com/Lundalogik/lime-elements/compare/v24.6.1...v24.6.2) (2019-11-08)


### Bug Fixes

* **chip-set:** display correct size of trailing icon in Edge ([d8de6db](https://github.com/Lundalogik/lime-elements/commit/d8de6db98fd6a2679c605e8d465eeb4e80342708))
* **list:** display correct size of icon in Edge ([787a713](https://github.com/Lundalogik/lime-elements/commit/787a713d5cb60486a801722fdb3deaabac95ea3e))

## [24.6.1](https://github.com/Lundalogik/lime-elements/compare/v24.6.0...v24.6.1) (2019-10-30)


### Bug Fixes

* **chip-set:** correct chip layout for very long chip texts ([50df5ae](https://github.com/Lundalogik/lime-elements/commit/50df5ae91a2c1983980c6db490237e96c7fab3ec)), closes [#496](https://github.com/Lundalogik/lime-elements/issues/496)

# [24.6.0](https://github.com/Lundalogik/lime-elements/compare/v24.5.1...v24.6.0) (2019-10-23)


### Features

* **picker:** no scroll in list when five or less items ([c129158](https://github.com/Lundalogik/lime-elements/commit/c1291586ef886ca57a6aa26f133688502d905a7c))

## [24.5.1](https://github.com/Lundalogik/lime-elements/compare/v24.5.0...v24.5.1) (2019-10-18)


### Bug Fixes

* **limel-select:** ellipsis when text overflow ([82d122c](https://github.com/Lundalogik/lime-elements/commit/82d122c))

# [24.5.0](https://github.com/Lundalogik/lime-elements/compare/v24.4.0...v24.5.0) (2019-10-18)


### Bug Fixes

* **icon:** change `medium` size icon from 41x41px to 40x40px ([2c2f3a7](https://github.com/Lundalogik/lime-elements/commit/2c2f3a7))
* **list:** add divider-lines between list-items for two-line lists with badge icons ([818af98](https://github.com/Lundalogik/lime-elements/commit/818af98)), closes [#465](https://github.com/Lundalogik/lime-elements/issues/465)
* **list:** correct alignment of icon lists to match that of same size badge-icon list ([80cd931](https://github.com/Lundalogik/lime-elements/commit/80cd931))
* **list:** set icon color to a non-transparent grey, since our icons look bad with transparency ([f58c84a](https://github.com/Lundalogik/lime-elements/commit/f58c84a))
* **picker:** increase icon size in dropdown list (use new default size) ([5370dae](https://github.com/Lundalogik/lime-elements/commit/5370dae))


### Features

* **chip-set:** add option `maxItems` to prevent adding new chips to input chip-set ([0d4b8eb](https://github.com/Lundalogik/lime-elements/commit/0d4b8eb))
* **list:** change default size of icons and badge-icons from `medium` to `small` ([4204c37](https://github.com/Lundalogik/lime-elements/commit/4204c37))
* **list:** make icon color configurable ([7651920](https://github.com/Lundalogik/lime-elements/commit/7651920))
* **picker:** prevent text-input when picker is "full" ([b50dc65](https://github.com/Lundalogik/lime-elements/commit/b50dc65))


### Performance Improvements

* **list-renderer:** remove `.bind()` from template ([0972bde](https://github.com/Lundalogik/lime-elements/commit/0972bde))

# [24.4.0](https://github.com/Lundalogik/lime-elements/compare/v24.3.0...v24.4.0) (2019-10-08)


### Features

* **chip-set:** the `setFocus` method now accepts an argument for emptying the input value ([961f52a](https://github.com/Lundalogik/lime-elements/commit/961f52a))
* **picker:** pressing escape in the dropdown empties and focuses the input ([6b06bb2](https://github.com/Lundalogik/lime-elements/commit/6b06bb2))

# [24.3.0](https://github.com/Lundalogik/lime-elements/compare/v24.2.2...v24.3.0) (2019-10-08)


### Bug Fixes

* **chip-set:** remove extra empty space below chips when picker is very narrow (hide the input) ([4524d9c](https://github.com/Lundalogik/lime-elements/commit/4524d9c)), closes [#455](https://github.com/Lundalogik/lime-elements/issues/455)


### Features

* **chip-set:** add `readonly` option ([c156fa2](https://github.com/Lundalogik/lime-elements/commit/c156fa2))
* **picker:** add `readonly` option ([6e653e7](https://github.com/Lundalogik/lime-elements/commit/6e653e7)), closes [#429](https://github.com/Lundalogik/lime-elements/issues/429)
* **picker:** add css variables for controlling component background color ([369b673](https://github.com/Lundalogik/lime-elements/commit/369b673))

## [24.2.2](https://github.com/Lundalogik/lime-elements/compare/v24.2.1...v24.2.2) (2019-10-07)


### Bug Fixes

* **button:** fix issue where button might show both "loading" and "loading done" state ([0b529c3](https://github.com/Lundalogik/lime-elements/commit/0b529c3))

## [24.2.1](https://github.com/Lundalogik/lime-elements/compare/v24.2.0...v24.2.1) (2019-10-02)


### Bug Fixes

* **chip-set:** supplies its own x-icon, independent of icon-set used ([3b21e72](https://github.com/Lundalogik/lime-elements/commit/3b21e72))
* **snackbar:** supplies its own x-icon, independent of icon-set used ([9d36977](https://github.com/Lundalogik/lime-elements/commit/9d36977))

# [24.2.0](https://github.com/Lundalogik/lime-elements/compare/v24.1.1...v24.2.0) (2019-10-02)


### Features

* **chip-set:** chips in input chip-set can be navigated by keyboard ([1710f58](https://github.com/Lundalogik/lime-elements/commit/1710f58))

## [24.1.1](https://github.com/Lundalogik/lime-elements/compare/v24.1.0...v24.1.1) (2019-09-30)


### Bug Fixes

* **dialog:** wait 100 ms after opening before dispatching resize event ([a430fc9](https://github.com/Lundalogik/lime-elements/commit/a430fc9))

# [24.1.0](https://github.com/Lundalogik/lime-elements/compare/v24.0.2...v24.1.0) (2019-09-30)


### Bug Fixes

* **chip-set:** don't hide the input when not focused ([88bef4a](https://github.com/Lundalogik/lime-elements/commit/88bef4a))
* **chip-set:** fix incorrect required-behavior ([f2c27fc](https://github.com/Lundalogik/lime-elements/commit/f2c27fc))
* **chip-set:** improve keyboard navigation for input chip-sets ([81edd58](https://github.com/Lundalogik/lime-elements/commit/81edd58))
* **chip-set:** reflect the properties `required` and `searchLabel` to attributes ([9ffe38c](https://github.com/Lundalogik/lime-elements/commit/9ffe38c))
* **list:** correct tab-flow for list-items ([62e1e3d](https://github.com/Lundalogik/lime-elements/commit/62e1e3d))
* **picker:** fix focus and blur behavior ([3365f09](https://github.com/Lundalogik/lime-elements/commit/3365f09)), closes [#428](https://github.com/Lundalogik/lime-elements/issues/428)
* **picker:** improve keyboard-navigation ([280165b](https://github.com/Lundalogik/lime-elements/commit/280165b))


### Features

* **chip-set:** add option and method to let consumer control when input is emptied ([5d33ec5](https://github.com/Lundalogik/lime-elements/commit/5d33ec5))

## [24.0.2](https://github.com/Lundalogik/lime-elements/compare/v24.0.1...v24.0.2) (2019-09-24)


### Bug Fixes

* **chip-set:** adds margin to search label ([68870ac](https://github.com/Lundalogik/lime-elements/commit/68870ac))
* **chip-set:** reflect properties `type` and `label` to attribute ([69aa336](https://github.com/Lundalogik/lime-elements/commit/69aa336))

## [24.0.1](https://github.com/Lundalogik/lime-elements/compare/v24.0.0...v24.0.1) (2019-09-20)


### Bug Fixes

* **picker:** the `interact` event supplies a `ListItem<number | string>` instead of `ListItem<any>` ([6df40e5](https://github.com/Lundalogik/lime-elements/commit/6df40e5))

# [24.0.0](https://github.com/Lundalogik/lime-elements/compare/v23.0.2...v24.0.0) (2019-09-18)


### Bug Fixes

* **picker:** remove leaking of internal implementation details through the `interact` event ([d4a3d11](https://github.com/Lundalogik/lime-elements/commit/d4a3d11))


### BREAKING CHANGES

* **picker:** The `interact` event used to supply a `Chip` used internally by limel-picker,
instead of the `ListItem` supplied to limel-picker by the consumer. This has now been fixed.
Implementations relying on the incorrect behavior will need to be updated.

## [23.0.2](https://github.com/Lundalogik/lime-elements/compare/v23.0.1...v23.0.2) (2019-09-16)


### Bug Fixes

* **chip set:** invalid state of required input chip-set not handled correctly ([c7dcbf1](https://github.com/Lundalogik/lime-elements/commit/c7dcbf1))
* **chip-set:** add required marker to input chip-set ([ae5a967](https://github.com/Lundalogik/lime-elements/commit/ae5a967))

## [23.0.1](https://github.com/Lundalogik/lime-elements/compare/v23.0.0...v23.0.1) (2019-09-13)


### Bug Fixes

* **select:** only emit one change event when selecting a value ([a7d4284](https://github.com/Lundalogik/lime-elements/commit/a7d4284))

# [23.0.0](https://github.com/Lundalogik/lime-elements/compare/v22.6.1...v23.0.0) (2019-09-10)


### Bug Fixes

* **icon:** move icons to private repo and packages ([acb2c01](https://github.com/Lundalogik/lime-elements/commit/acb2c01))


### BREAKING CHANGES

* **icon:** The icon set previously delivered with lime-elements
has been removed. The icons will be provided by the Lime products
which use lime-elements. External consumers of lime-elements need to
supply their own icons. Please see the documentation for limel-icon
for more info.

## [22.6.1](https://github.com/Lundalogik/lime-elements/compare/v22.6.0...v22.6.1) (2019-09-05)


### Bug Fixes

* **chip-set:** add missing export of chip types ([8b13349](https://github.com/Lundalogik/lime-elements/commit/8b13349))
* **date-picker:** add missing export of date types ([58b7d9b](https://github.com/Lundalogik/lime-elements/commit/58b7d9b))
* **file:** add missing export of file types ([5837c46](https://github.com/Lundalogik/lime-elements/commit/5837c46))
* **list:** add missing export of list types ([a360e1f](https://github.com/Lundalogik/lime-elements/commit/a360e1f))

# [22.6.0](https://github.com/Lundalogik/lime-elements/compare/v22.5.1...v22.6.0) (2019-09-04)


### Bug Fixes

* **select:** render select menu in document.body ([cc3f3f8](https://github.com/Lundalogik/lime-elements/commit/cc3f3f8)), closes [Lundalogik/crm-feature#839](https://github.com/Lundalogik/crm-feature/issues/839)
* **util/random-string:** make sure the string always begins with a letter, not a digit ([be69d87](https://github.com/Lundalogik/lime-elements/commit/be69d87))


### Features

* **menu-surface:** new menu-surface component ([1cbeb5d](https://github.com/Lundalogik/lime-elements/commit/1cbeb5d))
* **portal:** new component for rendering content within a different DOM node ([ad4cf42](https://github.com/Lundalogik/lime-elements/commit/ad4cf42))

## [22.5.1](https://github.com/Lundalogik/lime-elements/compare/v22.5.0...v22.5.1) (2019-09-04)


### Bug Fixes

* **slider:** fix background color for disabled slider ([2b1a890](https://github.com/Lundalogik/lime-elements/commit/2b1a890)), closes [#304](https://github.com/Lundalogik/lime-elements/issues/304)

# [22.5.0](https://github.com/Lundalogik/lime-elements/compare/v22.4.0...v22.5.0) (2019-09-02)


### Features

* **picker:** add optional message for empty search result ([b4c5b4e](https://github.com/Lundalogik/lime-elements/commit/b4c5b4e)), closes [#307](https://github.com/Lundalogik/lime-elements/issues/307)

# [22.4.0](https://github.com/Lundalogik/lime-elements/compare/v22.3.1...v22.4.0) (2019-08-27)


### Bug Fixes

* **picker:** makes icon size smaller in the list items ([4e9a9b5](https://github.com/Lundalogik/lime-elements/commit/4e9a9b5))


### Features

* **chip-set:** adds search label to input field when searching ([cf3d995](https://github.com/Lundalogik/lime-elements/commit/cf3d995))
* **picker:** adds support for displaying full list without cutting content ([e5f776f](https://github.com/Lundalogik/lime-elements/commit/e5f776f))

## [22.3.1](https://github.com/Lundalogik/lime-elements/compare/v22.3.0...v22.3.1) (2019-08-13)


### Bug Fixes

* **date-picker:** update date-picker when value is updated by the consumer ([5fe428e](https://github.com/Lundalogik/lime-elements/commit/5fe428e)), closes [Lundalogik/crm-feature#859](https://github.com/Lundalogik/crm-feature/issues/859)

# [22.3.0](https://github.com/Lundalogik/lime-elements/compare/v22.2.1...v22.3.0) (2019-08-09)


### Features

* **limel-banner:** add component ([8955a69](https://github.com/Lundalogik/lime-elements/commit/8955a69))

## [22.2.1](https://github.com/Lundalogik/lime-elements/compare/v22.2.0...v22.2.1) (2019-06-27)


### Bug Fixes

* **readme:** trigger release of updated readme to npmjs.com ([1cf3192](https://github.com/Lundalogik/lime-elements/commit/1cf3192))

# [22.2.0](https://github.com/Lundalogik/lime-elements/compare/v22.1.1...v22.2.0) (2019-06-26)


### Features

* open-source under Apache-2.0 license ([8064f12](https://github.com/Lundalogik/lime-elements/commit/8064f12)), closes [#369](https://github.com/Lundalogik/lime-elements/issues/369)

## [22.1.1](https://github.com/Lundalogik/lime-elements/compare/v22.1.0...v22.1.1) (2019-06-17)


### Bug Fixes

* **flatpickr:** switch to @limetech/flatpickr and update to v4.5.5 ([e61b756](https://github.com/Lundalogik/lime-elements/commit/e61b756))

# [22.1.0](https://github.com/Lundalogik/lime-elements/compare/v22.0.2...v22.1.0) (2019-06-17)


### Features

* **list:** add property for setting size on icon ([3aeda65](https://github.com/Lundalogik/lime-elements/commit/3aeda65))
* **snackbar:** add dismissible property ([019f706](https://github.com/Lundalogik/lime-elements/commit/019f706))

## [22.0.2](https://github.com/Lundalogik/lime-elements/compare/v22.0.1...v22.0.2) (2019-06-13)


### Bug Fixes

* **limel-icon:** undefined icons are not loaded ([dcabf2c](https://github.com/Lundalogik/lime-elements/commit/dcabf2c))

## [22.0.1](https://github.com/Lundalogik/lime-elements/compare/v22.0.0...v22.0.1) (2019-06-12)


### Bug Fixes

* **stencil:** use the 1.X version of @stencil/sass ([2625616](https://github.com/Lundalogik/lime-elements/commit/2625616))

# [22.0.0](https://github.com/Lundalogik/lime-elements/compare/v21.0.4...v22.0.0) (2019-06-12)


### Build System

* **package.json:** update @stencil/core ([097d81c](https://github.com/Lundalogik/lime-elements/commit/097d81c))


### BREAKING CHANGES

* **package.json:** **lime-elements** has been updated to use
Stencil One. This makes it incompatible with any components
built with older versions of Stencil. To upgrade to this
version of **lime-elements**, also upgrade your own code to
use Stencil One (v1.0.0 or later).

## [21.0.4](https://github.com/Lundalogik/lime-elements/compare/v21.0.3...v21.0.4) (2019-05-14)


### Bug Fixes

* **list:** remove black hover over list item with checkbox ([cbb4d34](https://github.com/Lundalogik/lime-elements/commit/cbb4d34)), closes [#364](https://github.com/Lundalogik/lime-elements/issues/364)

## [21.0.3](https://github.com/Lundalogik/lime-elements/compare/v21.0.2...v21.0.3) (2019-05-09)


### Bug Fixes

* **select:** increase z-index of scrim ([14e3b55](https://github.com/Lundalogik/lime-elements/commit/14e3b55))

## [21.0.2](https://github.com/Lundalogik/lime-elements/compare/v21.0.1...v21.0.2) (2019-05-08)


### Bug Fixes

* **select:** use correct color for the bottom line ([d40100f](https://github.com/Lundalogik/lime-elements/commit/d40100f))

## [21.0.1](https://github.com/Lundalogik/lime-elements/compare/v21.0.0...v21.0.1) (2019-04-30)


### Bug Fixes

* **dialog:** minor fixes ([468e3fc](https://github.com/Lundalogik/lime-elements/commit/468e3fc))

# [21.0.0](https://github.com/Lundalogik/lime-elements/compare/v20.2.0...v21.0.0) (2019-04-25)


### Features

* **list:** adds list type property ([3b4d5fc](https://github.com/Lundalogik/lime-elements/commit/3b4d5fc)), closes [#133](https://github.com/Lundalogik/lime-elements/issues/133)
* **radio-button:** adds radio button to be used in lists ([99dfb71](https://github.com/Lundalogik/lime-elements/commit/99dfb71))


### BREAKING CHANGES

* **list:** Removes selectable and multiple properties and adds type property.
With the type property it's now also possible to have radio button lists.

# [20.2.0](https://github.com/Lundalogik/lime-elements/compare/v20.1.1...v20.2.0) (2019-04-17)


### Bug Fixes

* **index.html:** add Roboto font ([d2a388b](https://github.com/Lundalogik/lime-elements/commit/d2a388b))


### Features

* **dialog:** add support for icon badge in header ([647d3fd](https://github.com/Lundalogik/lime-elements/commit/647d3fd)), closes [Lundalogik/crm-feature#698](https://github.com/Lundalogik/crm-feature/issues/698)

## [20.1.1](https://github.com/Lundalogik/lime-elements/compare/v20.1.0...v20.1.1) (2019-04-16)


### Bug Fixes

* **limel-file:** change event contains file ([4c51b40](https://github.com/Lundalogik/lime-elements/commit/4c51b40)), closes [#355](https://github.com/Lundalogik/lime-elements/issues/355)

# [20.1.0](https://github.com/Lundalogik/lime-elements/compare/v20.0.1...v20.1.0) (2019-04-10)


### Features

* **limel-file:** add component ([3b3f57c](https://github.com/Lundalogik/lime-elements/commit/3b3f57c)), closes [#303](https://github.com/Lundalogik/lime-elements/issues/303)

## [20.0.1](https://github.com/Lundalogik/lime-elements/compare/v20.0.0...v20.0.1) (2019-04-08)


### Bug Fixes

* **material:** update code to work with material 1.1.0 ([e2006de](https://github.com/Lundalogik/lime-elements/commit/e2006de))

# [20.0.0](https://github.com/Lundalogik/lime-elements/compare/v19.1.1...v20.0.0) (2019-04-05)


### Bug Fixes

* **list:** disabled items not handled correctly ([93a24cb](https://github.com/Lundalogik/lime-elements/commit/93a24cb))


### Code Refactoring

* **multi-select:** remove multi-select ([33fd282](https://github.com/Lundalogik/lime-elements/commit/33fd282)), closes [#203](https://github.com/Lundalogik/lime-elements/issues/203)


### Features

* **select:** add `required` property ([78be0a8](https://github.com/Lundalogik/lime-elements/commit/78be0a8)), closes [Lundalogik/lime-webclient#973](https://github.com/Lundalogik/lime-webclient/issues/973)
* **select:** add property for selecting multiple values ([1f7d193](https://github.com/Lundalogik/lime-elements/commit/1f7d193)), closes [#203](https://github.com/Lundalogik/lime-elements/issues/203)


### BREAKING CHANGES

* **multi-select:** multi-select component has been removed in favor of the select component that now
has a property called `multiple` that offers the same functionality in a better way

## [19.1.1](https://github.com/Lundalogik/lime-elements/compare/v19.1.0...v19.1.1) (2019-04-05)


### Performance Improvements

* **menu:** remove event listeners when component is destroyed ([3e7f71f](https://github.com/Lundalogik/lime-elements/commit/3e7f71f))

# [19.1.0](https://github.com/Lundalogik/lime-elements/compare/v19.0.1...v19.1.0) (2019-03-29)


### Features

* **list:** improve list to handle multiple selection with checkboxes ([78ffd99](https://github.com/Lundalogik/lime-elements/commit/78ffd99))

## [19.0.1](https://github.com/Lundalogik/lime-elements/compare/v19.0.0...v19.0.1) (2019-03-29)


### Performance Improvements

* **mdc:** remove event listeners when components are destroyed ([f0d131a](https://github.com/Lundalogik/lime-elements/commit/f0d131a))

# [19.0.0](https://github.com/Lundalogik/lime-elements/compare/v18.0.2...v19.0.0) (2019-03-29)


### Bug Fixes

* **chip set:** use icon badges ([898b247](https://github.com/Lundalogik/lime-elements/commit/898b247))


### Features

* **icon:** add `badge` attribute to limel-icon, and only add extra padding when true ([e4fa6a8](https://github.com/Lundalogik/lime-elements/commit/e4fa6a8))


### BREAKING CHANGES

* **icon:** Reverts breaking change to limel-icon from v17.0.0 (fd006f8).

## [18.0.2](https://github.com/Lundalogik/lime-elements/compare/v18.0.1...v18.0.2) (2019-03-28)


### Performance Improvements

* remove lamda and bind() from templates ([a048973](https://github.com/Lundalogik/lime-elements/commit/a048973)), closes [#346](https://github.com/Lundalogik/lime-elements/issues/346)

## [18.0.1](https://github.com/Lundalogik/lime-elements/compare/v18.0.0...v18.0.1) (2019-03-26)


### Bug Fixes

* **icon:** change box-sizing to border-box ([fb045e4](https://github.com/Lundalogik/lime-elements/commit/fb045e4))
* **spinner:** change box-sizing to border-box ([eff16bf](https://github.com/Lundalogik/lime-elements/commit/eff16bf))

# [18.0.0](https://github.com/Lundalogik/lime-elements/compare/v17.0.0...v18.0.0) (2019-03-26)


### Features

* change definition of 1rem from 10px to 16px ([35b00e5](https://github.com/Lundalogik/lime-elements/commit/35b00e5)), closes [Lundalogik/crm-feature#813](https://github.com/Lundalogik/crm-feature/issues/813)


### BREAKING CHANGES

* All size values have been rescaled to assume 1rem=16px.

# [17.0.0](https://github.com/Lundalogik/lime-elements/compare/v16.2.1...v17.0.0) (2019-03-21)


### Bug Fixes

* **color:** use correct color variable ([594eeb0](https://github.com/Lundalogik/lime-elements/commit/594eeb0))
* **icon:** define icon sizes ([eb706e7](https://github.com/Lundalogik/lime-elements/commit/eb706e7))
* **limel-multi-select:** stop internal change-events from propagating outside the component ([9b6a09a](https://github.com/Lundalogik/lime-elements/commit/9b6a09a))
* **limel-select:** stop internal change-events from propagating outside the component ([cbbade3](https://github.com/Lundalogik/lime-elements/commit/cbbade3))
* **picker:** added value generic property to list item ([e1e44b6](https://github.com/Lundalogik/lime-elements/commit/e1e44b6))
* **spinner:** define spinner sizes ([415065d](https://github.com/Lundalogik/lime-elements/commit/415065d))


### Code Refactoring

* **badge:** remove badge component ([8b81ef9](https://github.com/Lundalogik/lime-elements/commit/8b81ef9))
* **button group:** remove button group ([6df45df](https://github.com/Lundalogik/lime-elements/commit/6df45df))


### Features

* **flex container:** new flex container component ([e0a65ef](https://github.com/Lundalogik/lime-elements/commit/e0a65ef))
* **icon:** allow setting background color on icon ([fd006f8](https://github.com/Lundalogik/lime-elements/commit/fd006f8))


### BREAKING CHANGES

* **picker:** Removed the index signature from ListItem interface. Consumers of list items should
pass any custom values in the value property instead
* **button group:** Button group has been removed in favor of flex container, which offers the same
functionality with a cleaner API and is not constrained to only containing buttons
* **badge:** The badge component has been removed. Code that uses the badge component should use
the icon component instead, which offers the same functionality.

## [16.2.1](https://github.com/Lundalogik/lime-elements/compare/v16.2.0...v16.2.1) (2019-03-18)


### Bug Fixes

* **input field:** render icon correctly ([6517fcc](https://github.com/Lundalogik/lime-elements/commit/6517fcc))

# [16.2.0](https://github.com/Lundalogik/lime-elements/compare/v16.1.3...v16.2.0) (2019-03-08)


### Features

* **checkbox:** adds checkbox component ([ebc9272](https://github.com/Lundalogik/lime-elements/commit/ebc9272))

## [16.1.3](https://github.com/Lundalogik/lime-elements/compare/v16.1.2...v16.1.3) (2019-03-08)


### Bug Fixes

* **limel-date-picker:** fix momentjs locale being set globally by datepicker ([307f8d6](https://github.com/Lundalogik/lime-elements/commit/307f8d6)), closes [#323](https://github.com/Lundalogik/lime-elements/issues/323)

## [16.1.2](https://github.com/Lundalogik/lime-elements/compare/v16.1.1...v16.1.2) (2019-03-08)


### Bug Fixes

* correct scss imports so we do not break consumer builds ([c9b4fe6](https://github.com/Lundalogik/lime-elements/commit/c9b4fe6)), closes [#329](https://github.com/Lundalogik/lime-elements/issues/329)

## [16.1.1](https://github.com/Lundalogik/lime-elements/compare/v16.1.0...v16.1.1) (2019-03-07)


### Bug Fixes

* **chip set:** stop input change event from propagating ([e2c7b32](https://github.com/Lundalogik/lime-elements/commit/e2c7b32))
* **picker:** fix focus handling of picker in edge ([2017784](https://github.com/Lundalogik/lime-elements/commit/2017784))

# [16.1.0](https://github.com/Lundalogik/lime-elements/compare/v16.0.4...v16.1.0) (2019-03-07)


### Features

* **button:** add outlined button style ([26612a6](https://github.com/Lundalogik/lime-elements/commit/26612a6)), closes [#317](https://github.com/Lundalogik/lime-elements/issues/317)
* **button:** add support for icons on buttons ([37b2c5a](https://github.com/Lundalogik/lime-elements/commit/37b2c5a)), closes [#317](https://github.com/Lundalogik/lime-elements/issues/317)

## [16.0.4](https://github.com/Lundalogik/lime-elements/compare/v16.0.3...v16.0.4) (2019-03-05)


### Bug Fixes

* **chart:** remove exposed ChartJS interfaces ([0881b89](https://github.com/Lundalogik/lime-elements/commit/0881b89))

## [16.0.3](https://github.com/Lundalogik/lime-elements/compare/v16.0.2...v16.0.3) (2019-03-05)


### Bug Fixes

* **limel-date-picker:** don't format value for native pickers ([94be85f](https://github.com/Lundalogik/lime-elements/commit/94be85f))
* **limel-date-picker:** enable moving caret with keyboard ([dd49360](https://github.com/Lundalogik/lime-elements/commit/dd49360)), closes [#306](https://github.com/Lundalogik/lime-elements/issues/306)
* **limel-date-picker:** fix pickers broken on mobile ([5f17cd4](https://github.com/Lundalogik/lime-elements/commit/5f17cd4)), closes [#311](https://github.com/Lundalogik/lime-elements/issues/311)
* **limel-date-picker:** make sure week numbers are determined according to iso standard ([fd9dbf2](https://github.com/Lundalogik/lime-elements/commit/fd9dbf2))


### Performance Improvements

* **limel-date-picker:** on window resize, redraw picker instead of creating a new instance ([3327377](https://github.com/Lundalogik/lime-elements/commit/3327377))

## [16.0.2](https://github.com/Lundalogik/lime-elements/compare/v16.0.1...v16.0.2) (2019-02-26)


### Bug Fixes

* **limel-dialog:** open dialog on Microsoft Edge several times ([05c857f](https://github.com/Lundalogik/lime-elements/commit/05c857f)), closes [#314](https://github.com/Lundalogik/lime-elements/issues/314)

## [16.0.1](https://github.com/Lundalogik/lime-elements/compare/v16.0.0...v16.0.1) (2019-02-19)


### Bug Fixes

* **limel-date-picker:** change picker value when changing the input ([cf7dc60](https://github.com/Lundalogik/lime-elements/commit/cf7dc60)), closes [#297](https://github.com/Lundalogik/lime-elements/issues/297)

# [16.0.0](https://github.com/Lundalogik/lime-elements/compare/v15.0.7...v16.0.0) (2019-02-18)


### Features

* **limel-chart:** add component ([62b2b2c](https://github.com/Lundalogik/lime-elements/commit/62b2b2c)), closes [#287](https://github.com/Lundalogik/lime-elements/issues/287)
* **limel-grid:** add new limel-grid component ([5572b6b](https://github.com/Lundalogik/lime-elements/commit/5572b6b)), closes [#289](https://github.com/Lundalogik/lime-elements/issues/289) [Lundalogik/crm-feature#758](https://github.com/Lundalogik/crm-feature/issues/758)


### BREAKING CHANGES

* **limel-grid:** The scss-mixin grid-fullscreen has been removed. It is replaced by the new
limel-grid component.

## [15.0.7](https://github.com/Lundalogik/lime-elements/compare/v15.0.6...v15.0.7) (2019-02-15)


### Bug Fixes

* **limel-date-picker:** keep formatted value in sync ([1444754](https://github.com/Lundalogik/lime-elements/commit/1444754)), closes [#295](https://github.com/Lundalogik/lime-elements/issues/295)

## [15.0.6](https://github.com/Lundalogik/lime-elements/compare/v15.0.5...v15.0.6) (2019-02-13)


### Bug Fixes

* **limel-dialog:** set focus trap on hidden input field ([263937b](https://github.com/Lundalogik/lime-elements/commit/263937b))

## [15.0.5](https://github.com/Lundalogik/lime-elements/compare/v15.0.4...v15.0.5) (2019-02-08)


### Bug Fixes

* snackbar listens to action event again ([2860213](https://github.com/Lundalogik/lime-elements/commit/2860213))

## [15.0.4](https://github.com/Lundalogik/lime-elements/compare/v15.0.3...v15.0.4) (2019-02-05)


### Bug Fixes

* **limel-multi-select:** fix label styles ([9a6af5d](https://github.com/Lundalogik/lime-elements/commit/9a6af5d))

## [15.0.3](https://github.com/Lundalogik/lime-elements/compare/v15.0.2...v15.0.3) (2019-02-05)


### Bug Fixes

* **limel-picker:** focus event: stop propagration when element removed ([805c674](https://github.com/Lundalogik/lime-elements/commit/805c674))

## [15.0.2](https://github.com/Lundalogik/lime-elements/compare/v15.0.1...v15.0.2) (2019-02-05)


### Bug Fixes

* **limel-multi-select:** use floating label styles ([fcdd9dd](https://github.com/Lundalogik/lime-elements/commit/fcdd9dd))
* **limel-slider:** use floating label styles ([4a5e469](https://github.com/Lundalogik/lime-elements/commit/4a5e469))

## [15.0.1](https://github.com/Lundalogik/lime-elements/compare/v15.0.0...v15.0.1) (2019-02-04)


### Bug Fixes

* **multi-select:** change color on multi-select radio buttons to a dark-grey color ([7c47810](https://github.com/Lundalogik/lime-elements/commit/7c47810)), closes [#254](https://github.com/Lundalogik/lime-elements/issues/254)
* **multi-select:** remove border-bottom styling ([9e79010](https://github.com/Lundalogik/lime-elements/commit/9e79010))
* **slider:** remove border-bottom styling ([791ca7f](https://github.com/Lundalogik/lime-elements/commit/791ca7f))

# [15.0.0](https://github.com/Lundalogik/lime-elements/compare/v14.0.0...v15.0.0) (2019-02-01)


### chore

* **limel-autocomplete:** delete component ([8ef2ad2](https://github.com/Lundalogik/lime-elements/commit/8ef2ad2)), closes [#274](https://github.com/Lundalogik/lime-elements/issues/274)


### Features

* **limel-input-field:** add prop completions as suggestions value can autocomplete to ([0eddeae](https://github.com/Lundalogik/lime-elements/commit/0eddeae)), closes [#274](https://github.com/Lundalogik/lime-elements/issues/274)


### BREAKING CHANGES

* **limel-autocomplete:** limel-autocomplete is deleted, use limel-input-field with completions instead

# [14.0.0](https://github.com/Lundalogik/lime-elements/compare/v13.4.0...v14.0.0) (2019-02-01)


### Code Refactoring

* **grid:** rename mixin `fullpage-grid` to `grid-fullpage` ([749dc3f](https://github.com/Lundalogik/lime-elements/commit/749dc3f))


### BREAKING CHANGES

* **grid:** In order to better accommodate other grid mixins in the future, the mixin
`fullpage-grid` has been renamed to `grid-fullpage`.

# [13.4.0](https://github.com/Lundalogik/lime-elements/compare/v13.3.0...v13.4.0) (2019-01-31)


### Features

* **grid:** add scss mixin for fullpage-grid ([5b81baf](https://github.com/Lundalogik/lime-elements/commit/5b81baf)), closes [Lundalogik/crm-feature#709](https://github.com/Lundalogik/crm-feature/issues/709) [Lundalogik/crm-feature#710](https://github.com/Lundalogik/crm-feature/issues/710)

# [13.3.0](https://github.com/Lundalogik/lime-elements/compare/v13.2.3...v13.3.0) (2019-01-30)


### Bug Fixes

* **limel-slider:** change pin color to white ([b83c585](https://github.com/Lundalogik/lime-elements/commit/b83c585)), closes [#252](https://github.com/Lundalogik/lime-elements/issues/252)


### Features

* **limel-slider:** define highlight color by variable ([07b687c](https://github.com/Lundalogik/lime-elements/commit/07b687c)), closes [#252](https://github.com/Lundalogik/lime-elements/issues/252)

## [13.2.3](https://github.com/Lundalogik/lime-elements/compare/v13.2.2...v13.2.3) (2019-01-29)


### Bug Fixes

* **limel-dialog:** possible to create fullsize dialog ([590f592](https://github.com/Lundalogik/lime-elements/commit/590f592))

## [13.2.2](https://github.com/Lundalogik/lime-elements/compare/v13.2.1...v13.2.2) (2019-01-28)


### Bug Fixes

* **limel-select:** add icon to select list ([d0dc5a9](https://github.com/Lundalogik/lime-elements/commit/d0dc5a9))

## [13.2.1](https://github.com/Lundalogik/lime-elements/compare/v13.2.0...v13.2.1) (2019-01-28)


### Bug Fixes

* **input-field:** floating label if value is set or field is focused ([85d4c0e](https://github.com/Lundalogik/lime-elements/commit/85d4c0e))

# [13.2.0](https://github.com/Lundalogik/lime-elements/compare/v13.1.0...v13.2.0) (2019-01-25)


### Features

* **limel-badges:** allow badges ([161dfd4](https://github.com/Lundalogik/lime-elements/commit/161dfd4)), closes [Lundalogik/crm-feature#695](https://github.com/Lundalogik/crm-feature/issues/695)
* **limel-list:** overwrite material badge size in a list ([f825806](https://github.com/Lundalogik/lime-elements/commit/f825806)), closes [Lundalogik/crm-feature#695](https://github.com/Lundalogik/crm-feature/issues/695)

# [13.1.0](https://github.com/Lundalogik/lime-elements/compare/v13.0.3...v13.1.0) (2019-01-25)


### Bug Fixes

* **limel-picker:** set chip-set id from listItem id if existing ([d260906](https://github.com/Lundalogik/lime-elements/commit/d260906)), closes [#256](https://github.com/Lundalogik/lime-elements/issues/256)


### Features

* **limel-picker:** add interact event ([2e191d1](https://github.com/Lundalogik/lime-elements/commit/2e191d1)), closes [#256](https://github.com/Lundalogik/lime-elements/issues/256)

## [13.0.3](https://github.com/Lundalogik/lime-elements/compare/v13.0.2...v13.0.3) (2019-01-25)


### Bug Fixes

* add border to multi-select ([5986223](https://github.com/Lundalogik/lime-elements/commit/5986223))
* add border to slider ([b4784f1](https://github.com/Lundalogik/lime-elements/commit/b4784f1))

## [13.0.2](https://github.com/Lundalogik/lime-elements/compare/v13.0.1...v13.0.2) (2019-01-25)


### Bug Fixes

* change border bottom color on input fields ([2981bc9](https://github.com/Lundalogik/lime-elements/commit/2981bc9))
* input field for limel-input is white ([beae022](https://github.com/Lundalogik/lime-elements/commit/beae022))
* input field for limel-picker is white ([1533a54](https://github.com/Lundalogik/lime-elements/commit/1533a54))
* input field for limel-select is white ([62c8f5c](https://github.com/Lundalogik/lime-elements/commit/62c8f5c))

## [13.0.1](https://github.com/Lundalogik/lime-elements/compare/v13.0.0...v13.0.1) (2019-01-25)


### Bug Fixes

* **picker:** improve performance for limel-picker ([7b01dac](https://github.com/Lundalogik/lime-elements/commit/7b01dac))

# [13.0.0](https://github.com/Lundalogik/lime-elements/compare/v12.1.1...v13.0.0) (2019-01-21)


### Bug Fixes

* **collapsible-section:** header is set as a property ([f4074e4](https://github.com/Lundalogik/lime-elements/commit/f4074e4))


### BREAKING CHANGES

* **collapsible-section:** New interface for lime-collapsible-section

## [12.1.1](https://github.com/Lundalogik/lime-elements/compare/v12.1.0...v12.1.1) (2019-01-21)


### Bug Fixes

* **fonts:** change fontsizes ([478c608](https://github.com/Lundalogik/lime-elements/commit/478c608))

# [12.1.0](https://github.com/Lundalogik/lime-elements/compare/v12.0.5...v12.1.0) (2019-01-17)


### Features

* **limel-dialog:** add closing event ([e98038f](https://github.com/Lundalogik/lime-elements/commit/e98038f)), closes [#244](https://github.com/Lundalogik/lime-elements/issues/244)

## [12.0.5](https://github.com/Lundalogik/lime-elements/compare/v12.0.4...v12.0.5) (2019-01-14)


### Bug Fixes

* **limel-date-picker:** fix language config for provided translations ([58722f2](https://github.com/Lundalogik/lime-elements/commit/58722f2)), closes [#241](https://github.com/Lundalogik/lime-elements/issues/241)

## [12.0.4](https://github.com/Lundalogik/lime-elements/compare/v12.0.3...v12.0.4) (2019-01-14)


### Bug Fixes

* **limel-date-picker:** translate based on language property ([15ee7b6](https://github.com/Lundalogik/lime-elements/commit/15ee7b6)), closes [#241](https://github.com/Lundalogik/lime-elements/issues/241)

## [12.0.3](https://github.com/Lundalogik/lime-elements/compare/v12.0.2...v12.0.3) (2019-01-11)


### Bug Fixes

* **limel-menu:** decrease size of text and icons ([fed8c31](https://github.com/Lundalogik/lime-elements/commit/fed8c31)), closes [Lundalogik/crm-feature#704](https://github.com/Lundalogik/crm-feature/issues/704) [#210](https://github.com/Lundalogik/lime-elements/issues/210)

## [12.0.2](https://github.com/Lundalogik/lime-elements/compare/v12.0.1...v12.0.2) (2019-01-10)


### Bug Fixes

* **docs:** fix issue with documentation being published at incorrect path ([5e16f72](https://github.com/Lundalogik/lime-elements/commit/5e16f72))

## [12.0.1](https://github.com/Lundalogik/lime-elements/compare/v12.0.0...v12.0.1) (2019-01-10)


### Bug Fixes

* **limel-date-picker:** format property overwrites default date format ([3e0f4dc](https://github.com/Lundalogik/lime-elements/commit/3e0f4dc)), closes [#237](https://github.com/Lundalogik/lime-elements/issues/237)

# [12.0.0](https://github.com/Lundalogik/lime-elements/compare/v11.4.5...v12.0.0) (2019-01-10)


### Bug Fixes

* **limel-chip-set:** make method getEditMode async ([cee272f](https://github.com/Lundalogik/lime-elements/commit/cee272f))


### BREAKING CHANGES

* **limel-chip-set:** The method `getEditMode` on limel-chip-set is now async (it will return a promise).

## [11.4.5](https://github.com/Lundalogik/lime-elements/compare/v11.4.4...v11.4.5) (2019-01-03)


### Bug Fixes

* **limel-menu:** no word wrapping in menu items ([446a1be](https://github.com/Lundalogik/lime-elements/commit/446a1be)), closes [#230](https://github.com/Lundalogik/lime-elements/issues/230)

## [11.4.4](https://github.com/Lundalogik/lime-elements/compare/v11.4.3...v11.4.4) (2018-12-21)


### Bug Fixes

* **limel-date-picker:** fix width calculation if initially hidden ([d0f8de3](https://github.com/Lundalogik/lime-elements/commit/d0f8de3)), closes [#228](https://github.com/Lundalogik/lime-elements/issues/228)

## [11.4.3](https://github.com/Lundalogik/lime-elements/compare/v11.4.2...v11.4.3) (2018-12-19)


### Bug Fixes

* **install:** add postinstall.js to published files ([3e5a239](https://github.com/Lundalogik/lime-elements/commit/3e5a239))

## [11.4.2](https://github.com/Lundalogik/lime-elements/compare/v11.4.1...v11.4.2) (2018-12-18)


### Bug Fixes

* **build:** fix postinstall to check if files exist ([2093bfd](https://github.com/Lundalogik/lime-elements/commit/2093bfd))

## [11.4.1](https://github.com/Lundalogik/lime-elements/compare/v11.4.0...v11.4.1) (2018-12-18)


### Bug Fixes

* **limel-picker:** fix z-index in list by using mdc-menu-surface css ([83eb102](https://github.com/Lundalogik/lime-elements/commit/83eb102)), closes [#179](https://github.com/Lundalogik/lime-elements/issues/179)

# [11.4.0](https://github.com/Lundalogik/lime-elements/compare/v11.3.0...v11.4.0) (2018-12-18)


### Features

* **date-picker:** implements date pickers ([86d73a4](https://github.com/Lundalogik/lime-elements/commit/86d73a4))
* **translations:** adds translations support ([fa400ce](https://github.com/Lundalogik/lime-elements/commit/fa400ce))

# [11.3.0](https://github.com/Lundalogik/lime-elements/compare/v11.2.1...v11.3.0) (2018-12-17)


### Bug Fixes

* **picker:** show pre-selected items ([0a66848](https://github.com/Lundalogik/lime-elements/commit/0a66848))


### Features

* **limel-dialog:** add property closingActions incl. example ([fb14313](https://github.com/Lundalogik/lime-elements/commit/fb14313)), closes [#139](https://github.com/Lundalogik/lime-elements/issues/139)

## [11.2.1](https://github.com/Lundalogik/lime-elements/compare/v11.2.0...v11.2.1) (2018-12-03)


### Bug Fixes

* **chip-set:** add animation to input element ([ef0c717](https://github.com/Lundalogik/lime-elements/commit/ef0c717))

# [11.2.0](https://github.com/Lundalogik/lime-elements/compare/v11.1.0...v11.2.0) (2018-11-29)


### Features

* **colors:** define properties for setting colors ([a6c1333](https://github.com/Lundalogik/lime-elements/commit/a6c1333))

# [11.1.0](https://github.com/Lundalogik/lime-elements/compare/v11.0.0...v11.1.0) (2018-11-29)


### Features

* **chip-set:** allow setting background color when type is input ([7ba0fd3](https://github.com/Lundalogik/lime-elements/commit/7ba0fd3))
* **input-field:** allow setting background color of field ([c770fe2](https://github.com/Lundalogik/lime-elements/commit/c770fe2))
* **select:** allow setting background color of field ([c1e1375](https://github.com/Lundalogik/lime-elements/commit/c1e1375))

# [11.0.0](https://github.com/Lundalogik/lime-elements/compare/v10.0.2...v11.0.0) (2018-11-26)


### Bug Fixes

* **input-field:** onChange with number input emits a number instead of string ([1047f25](https://github.com/Lundalogik/lime-elements/commit/1047f25))


### chore

* **icons:** move icons to base folder ([0b58309](https://github.com/Lundalogik/lime-elements/commit/0b58309))


### Features

* **text-field:** adds support for number formatting ([661f9c6](https://github.com/Lundalogik/lime-elements/commit/661f9c6))


### BREAKING CHANGES

* **icons:** Icons have been moved out from the folder structure and are all located in one folder instead
* **text-field:** Renames limel-text-field to limel-input-field.

## [10.0.2](https://github.com/Lundalogik/lime-elements/compare/v10.0.1...v10.0.2) (2018-11-22)


### Bug Fixes

* **limel-picker:** fix issue where suggestions might be shown even if the component is blurred ([54afe6b](https://github.com/Lundalogik/lime-elements/commit/54afe6b)), closes [#194](https://github.com/Lundalogik/lime-elements/issues/194) [Lundalogik/crm-feature#636](https://github.com/Lundalogik/crm-feature/issues/636)

## [10.0.1](https://github.com/Lundalogik/lime-elements/compare/v10.0.0...v10.0.1) (2018-11-20)


### Bug Fixes

* **picker:** set focus to text field when picker receives focus ([7abe7a2](https://github.com/Lundalogik/lime-elements/commit/7abe7a2))

# [10.0.0](https://github.com/Lundalogik/lime-elements/compare/v9.9.0...v10.0.0) (2018-11-20)


### Bug Fixes

* **limel-chip-set:** change name of method `focus` to `setFocus` ([f849e8e](https://github.com/Lundalogik/lime-elements/commit/f849e8e))


### BREAKING CHANGES

* **limel-chip-set:** The method `focus()` on `limel-chip-set` has been renamed to `setFocus()`.

# [9.9.0](https://github.com/Lundalogik/lime-elements/compare/v9.8.0...v9.9.0) (2018-11-19)


### Features

* **list:** support for icons ([eb1021f](https://github.com/Lundalogik/lime-elements/commit/eb1021f))
* **menu:** support for icons ([7eee825](https://github.com/Lundalogik/lime-elements/commit/7eee825))
* **picker:** support for icons ([ccda724](https://github.com/Lundalogik/lime-elements/commit/ccda724))

# [9.8.0](https://github.com/Lundalogik/lime-elements/compare/v9.7.0...v9.8.0) (2018-11-15)


### Features

* **dialog:** allow size to be set through CSS variables ([fad7f1c](https://github.com/Lundalogik/lime-elements/commit/fad7f1c))

# [9.7.0](https://github.com/Lundalogik/lime-elements/compare/v9.6.0...v9.7.0) (2018-11-15)


### Features

* **limel-slider:** add factor property ([a412f72](https://github.com/Lundalogik/lime-elements/commit/a412f72)), closes [#196](https://github.com/Lundalogik/lime-elements/issues/196)

# [9.6.0](https://github.com/Lundalogik/lime-elements/compare/v9.5.0...v9.6.0) (2018-11-14)


### Bug Fixes

* **limel-collapsible-section:** call dispatchResizeEvent when section opened ([cc092fd](https://github.com/Lundalogik/lime-elements/commit/cc092fd)), closes [#192](https://github.com/Lundalogik/lime-elements/issues/192)


### Features

* **picker:** support for suggestions and searching for an empty value ([2e1a61c](https://github.com/Lundalogik/lime-elements/commit/2e1a61c))

# [9.5.0](https://github.com/Lundalogik/lime-elements/compare/v9.4.0...v9.5.0) (2018-11-13)


### Features

* **limel-icon-button:** add method `relayout` that triggers re-layout of hover-highlight ([2808c53](https://github.com/Lundalogik/lime-elements/commit/2808c53))

# [9.4.0](https://github.com/Lundalogik/lime-elements/compare/v9.3.0...v9.4.0) (2018-11-12)


### Features

* **limel-icon-button:** add component ([4423e20](https://github.com/Lundalogik/lime-elements/commit/4423e20)), closes [#186](https://github.com/Lundalogik/lime-elements/issues/186)

# [9.3.0](https://github.com/Lundalogik/lime-elements.git/compare/v9.2.1...v9.3.0) (2018-11-05)


### Bug Fixes

* **chip-set:** clear text value on input blur ([ad87834](https://github.com/Lundalogik/lime-elements.git/commit/ad87834))
* **linear-progress:** set text-align inside progress bar to left ([a6ca6b6](https://github.com/Lundalogik/lime-elements.git/commit/a6ca6b6))
* **list:** update variable name ([cdb1fe1](https://github.com/Lundalogik/lime-elements.git/commit/cdb1fe1))


### Features

* **picker:** only allow unique values to be selected ([04da767](https://github.com/Lundalogik/lime-elements.git/commit/04da767))
* **picker:** set focus on chip set input when selecting from the picker ([06b9eec](https://github.com/Lundalogik/lime-elements.git/commit/06b9eec))
* **picker:** use chip set input in picker ([ceddc15](https://github.com/Lundalogik/lime-elements.git/commit/ceddc15))

## [9.2.1](https://github.com/Lundalogik/lime-elements.git/compare/v9.2.0...v9.2.1) (2018-11-01)


### Bug Fixes

* **limel-slider:** adjust disabled state to material style ([ad5e0d6](https://github.com/Lundalogik/lime-elements.git/commit/ad5e0d6)), closes [#154](https://github.com/Lundalogik/lime-elements.git/issues/154)

# [9.2.0](https://github.com/Lundalogik/lime-elements.git/compare/v9.1.1...v9.2.0) (2018-10-30)


### Features

* **chip:** new chip-set component ([8a7ba66](https://github.com/Lundalogik/lime-elements.git/commit/8a7ba66))

## [9.1.1](https://github.com/Lundalogik/lime-elements/compare/v9.1.0...v9.1.1) (2018-10-29)


### Bug Fixes

* **icon:** reduces the gap between sizes to steps of 0.5 rem ([0b289c9](https://github.com/Lundalogik/lime-elements/commit/0b289c9))

# [9.1.0](https://github.com/Lundalogik/lime-elements/compare/v9.0.2...v9.1.0) (2018-10-24)


### Features

* **badge:** new badge component ([a01e0e1](https://github.com/Lundalogik/lime-elements/commit/a01e0e1))
* **linear-progress:** add indeterminate prop ([19ac5df](https://github.com/Lundalogik/lime-elements/commit/19ac5df))
* **linear-progress:** add variable for setting background color ([fcf6cad](https://github.com/Lundalogik/lime-elements/commit/fcf6cad))

## [9.0.2](https://github.com/Lundalogik/lime-elements/compare/v9.0.1...v9.0.2) (2018-10-23)


### Bug Fixes

* **icon:** modify icon sizes ([2db4043](https://github.com/Lundalogik/lime-elements/commit/2db4043))
* **icon:** replace all black colors with current color ([4c38ce6](https://github.com/Lundalogik/lime-elements/commit/4c38ce6))

## [9.0.1](https://github.com/Lundalogik/lime-elements/compare/v9.0.0...v9.0.1) (2018-10-19)


### Bug Fixes

* **limel-dialog:** trigger resize-event after opening-animation has finished ([34ab9dc](https://github.com/Lundalogik/lime-elements/commit/34ab9dc)), closes [#153](https://github.com/Lundalogik/lime-elements/issues/153)

# [9.0.0](https://github.com/Lundalogik/lime-elements/compare/v8.1.2...v9.0.0) (2018-10-17)


### Bug Fixes

* **limel-dialog:** fix broken markup and resulting styling of the header ([ff81efc](https://github.com/Lundalogik/lime-elements/commit/ff81efc))


### BREAKING CHANGES

* **limel-dialog:** The `header` slot has been replaced with the `heading` attribute.

## [8.1.2](https://github.com/Lundalogik/lime-elements/compare/v8.1.1...v8.1.2) (2018-10-16)


### Bug Fixes

* **collapsible-section:** remove unnecessary event dispatching ([068afd5](https://github.com/Lundalogik/lime-elements/commit/068afd5)), closes [#160](https://github.com/Lundalogik/lime-elements/issues/160)

## [8.1.1](https://github.com/Lundalogik/lime-elements/compare/v8.1.0...v8.1.1) (2018-10-16)


### Bug Fixes

* **dialog:** remove unnecessary event dispatching ([225d985](https://github.com/Lundalogik/lime-elements/commit/225d985)), closes [#159](https://github.com/Lundalogik/lime-elements/issues/159)

# [8.1.0](https://github.com/Lundalogik/lime-elements/compare/v8.0.1...v8.1.0) (2018-10-15)


### Features

* **linear-progress:** new linear-progress component ([82ea96b](https://github.com/Lundalogik/lime-elements/commit/82ea96b))

## [8.0.1](https://github.com/Lundalogik/lime-elements/compare/v8.0.0...v8.0.1) (2018-10-12)


### Bug Fixes

* **limel-dialog:** make it possible to open the dialog again after clicking the scrim ([bcd2b6e](https://github.com/Lundalogik/lime-elements/commit/bcd2b6e)), closes [#150](https://github.com/Lundalogik/lime-elements/issues/150)

# [8.0.0](https://github.com/Lundalogik/lime-elements/compare/v7.1.0...v8.0.0) (2018-10-11)


### Bug Fixes

* **limel-picker:** change the interface to accept a search-function which returns a promise ([0317d0f](https://github.com/Lundalogik/lime-elements/commit/0317d0f)), closes [#70](https://github.com/Lundalogik/lime-elements/issues/70)


### BREAKING CHANGES

* **limel-picker:** The `input` event has been removed. Instead, the picker should be supplied with a
searcher-function, that accepts a query string as argument, and returns a promise that is eventually
resolved with the search-result. As a result, the `items` property has also been removed, since
these are now supplied by the searcher instead.

# [7.1.0](https://github.com/Lundalogik/lime-elements/compare/v7.0.0...v7.1.0) (2018-10-10)


### Features

* **limel-multi-select:** add multi-select component ([2dce502](https://github.com/Lundalogik/lime-elements/commit/2dce502))

# [7.0.0](https://github.com/Lundalogik/lime-elements/compare/v6.1.1...v7.0.0) (2018-10-08)


### Features

* **limel-select:** change the `value` property from `string` to `Option` ([c8d2217](https://github.com/Lundalogik/lime-elements/commit/c8d2217)), closes [#129](https://github.com/Lundalogik/lime-elements/issues/129)


### BREAKING CHANGES

* **limel-select:** The type of the `value` property has been changed from `string` to `Option`. It now
holds the selected Option object, not just the `value` of the selected Option. An empty value,
previously represented by an empty string, is now represented by `null` instead.

## [6.1.1](https://github.com/Lundalogik/lime-elements/compare/v6.1.0...v6.1.1) (2018-10-05)


### Bug Fixes

* correct scss-imports to remove build-error in consuming plugins ([e57cdcf](https://github.com/Lundalogik/lime-elements/commit/e57cdcf))

# [6.1.0](https://github.com/Lundalogik/lime-elements/compare/v6.0.0...v6.1.0) (2018-10-03)


### Features

* **limel-icon:** add limel-icon component ([e073c8d](https://github.com/Lundalogik/lime-elements/commit/e073c8d))

# [6.0.0](https://github.com/Lundalogik/lime-elements/compare/v5.1.2...v6.0.0) (2018-10-03)


### Bug Fixes

* **limel-select:** set display:block on the custom-element ([0812743](https://github.com/Lundalogik/lime-elements/commit/0812743))


### Features

* move towards vanilla material styling ([a1ed101](https://github.com/Lundalogik/lime-elements/commit/a1ed101)), closes [#111](https://github.com/Lundalogik/lime-elements/issues/111)


### BREAKING CHANGES

* Visually, there are "breaking" changes. `limel-textfield` has a significantly
different look, which also affects all other components using limel-textfield: `limel-autocomplete`,
`limel-picker`. `limel-select` has received a similar update of visual style. The font has been
changed from Open Sans to Material's default Roboto.

## [5.1.2](https://github.com/Lundalogik/lime-elements/compare/v5.1.1...v5.1.2) (2018-10-02)


### Bug Fixes

* **limel-select:** update the value when the available options are changed ([ea8d31f](https://github.com/Lundalogik/lime-elements/commit/ea8d31f)), closes [#125](https://github.com/Lundalogik/lime-elements/issues/125)

## [5.1.1](https://github.com/Lundalogik/lime-elements/compare/v5.1.0...v5.1.1) (2018-09-27)


### Bug Fixes

* **limel-switch:** make switch update correctly when value is changed by consumer ([d4171b1](https://github.com/Lundalogik/lime-elements/commit/d4171b1)), closes [#121](https://github.com/Lundalogik/lime-elements/issues/121)

# [5.1.0](https://github.com/Lundalogik/lime-elements/compare/v5.0.2...v5.1.0) (2018-09-26)


### Features

* **snackbar:** new snackbar component ([065e567](https://github.com/Lundalogik/lime-elements/commit/065e567))

## [5.0.2](https://github.com/Lundalogik/lime-elements/compare/v5.0.1...v5.0.2) (2018-09-24)


### Bug Fixes

* **limel-menu:** reflect label to attribute ([90bd45d](https://github.com/Lundalogik/lime-elements/commit/90bd45d))
* **limel-menu:** set aria-hidden attribute on menu to `false` when menu is open ([9d9a744](https://github.com/Lundalogik/lime-elements/commit/9d9a744))

## [5.0.1](https://github.com/Lundalogik/lime-elements/compare/v5.0.0...v5.0.1) (2018-09-24)


### Bug Fixes

* exclude .scss files from dist-package ([6e7fabd](https://github.com/Lundalogik/lime-elements/commit/6e7fabd))

# [5.0.0](https://github.com/Lundalogik/lime-elements/compare/v4.0.1...v5.0.0) (2018-09-21)


### Bug Fixes

* export previously missing interfaces ([0de8850](https://github.com/Lundalogik/lime-elements/commit/0de8850))


### Code Refactoring

* **limel-select:** rename `IOption` to `Option` ([4d707e9](https://github.com/Lundalogik/lime-elements/commit/4d707e9))


### BREAKING CHANGES

* **limel-select:** The interface `IOption` has been renamed to `Option`. Before this release, the
interface was not correctly exported, so it is unlikely that any external consumers of
**lime-elements** actually have a breaking dependency on this interface.

## [4.0.1](https://github.com/Lundalogik/lime-elements/compare/v4.0.0...v4.0.1) (2018-09-21)


### Bug Fixes

* fix dependency on lime-material-components-web ([076e8f5](https://github.com/Lundalogik/lime-elements/commit/076e8f5))

# [4.0.0](https://github.com/Lundalogik/lime-elements/compare/v3.6.1...v4.0.0) (2018-09-21)


### Bug Fixes

* **stencil:** release 3.6.1 was actually breaking and is replaced by this release ([272c5ca](https://github.com/Lundalogik/lime-elements/commit/272c5ca))


### BREAKING CHANGES

* **stencil:** When using **lime-elements** with **Angular** or other build system using
**Webpack**, replace the line `import { defineCustomElements }  from 'lime-elements'` with `import {
defineCustomElements }  from 'lime-elements/dist/loader'`. In **Angular**, this line is found in
`main.ts`.

## [3.6.1](https://github.com/Lundalogik/lime-elements/compare/v3.6.0...v3.6.1) (2018-09-17)

### BREAKING! 3.6.1 should have been a major release. It has been unpublished. Please downgrade to 3.6.0 or upgrade to 4.0.0.

### Bug Fixes

* **limel-list:** fix component crashing when there are no elements in the list ([453dc34](https://github.com/Lundalogik/lime-elements/commit/453dc34))
* **limel-list:** set the default display value to `block` ([6431af3](https://github.com/Lundalogik/lime-elements/commit/6431af3))

# [3.6.0](https://github.com/Lundalogik/lime-elements/compare/v3.5.0...v3.6.0) (2018-09-06)


### Features

* **limel-menu:** add menu component ([c35c676](https://github.com/Lundalogik/lime-elements/commit/c35c676)), closes [#71](https://github.com/Lundalogik/lime-elements/issues/71)

# [3.5.0](https://github.com/Lundalogik/lime-elements/compare/v3.4.2...v3.5.0) (2018-09-06)


### Features

* **limel-text-field:** add property type to determine the inputs html-type ([245bf71](https://github.com/Lundalogik/lime-elements/commit/245bf71)), closes [#75](https://github.com/Lundalogik/lime-elements/issues/75)

## [3.4.2](https://github.com/Lundalogik/lime-elements/compare/v3.4.1...v3.4.2) (2018-09-06)


### Bug Fixes

* add an empty file to trigger a release for debugging-purposes ([6eb4135](https://github.com/Lundalogik/lime-elements/commit/6eb4135))
* **dummy:** no actual changes, this bump is only to have semantic-release create a changelog file ([c7f5b09](https://github.com/Lundalogik/lime-elements/commit/c7f5b09))

## [3.4.1](https://github.com/Lundalogik/lime-elements/compare/v3.4.0...v3.4.1) (2018-08-31)


### Performance Improvements

* **limel-dialog:** remove unnecessary state-decorator ([7dd2f15](https://github.com/Lundalogik/lime-elements/commit/7dd2f15))

# [3.4.0](https://github.com/Lundalogik/lime-elements/compare/v3.3.2...v3.4.0) (2018-08-30)


### Features

* **limel-collapsible-section:** add collapsible section component ([3b29074](https://github.com/Lundalogik/lime-elements/commit/3b29074)), closes [#63](https://github.com/Lundalogik/lime-elements/issues/63)

## [3.3.1](https://github.com/Lundalogik/lime-elements/compare/v3.3.0...v3.3.1) (2018-08-30)


### Performance Improvements

* **less:** remove support for styling with LESS ([64f3540](https://github.com/Lundalogik/lime-elements/commit/64f3540))

# [3.3.0](https://github.com/Lundalogik/lime-elements/compare/v3.2.1...v3.3.0) (2018-08-29)


### Features

* **stenciljs:** update stenciljs to v0.11.4 ([5ca4e18](https://github.com/Lundalogik/lime-elements/commit/5ca4e18)), closes [/github.com/ionic-team/stencil/blob/master/CHANGELOG.md#-0114-2018-08-12](https://github.com//github.com/ionic-team/stencil/blob/master/CHANGELOG.md/issues/-0114-2018-08-12)

## [3.2.1](https://github.com/Lundalogik/lime-elements/compare/v3.2.0...v3.2.1) (2018-08-23)


### Bug Fixes

* **limel-props:** fix issue with props sometimes not being parsed ([fbe2caa](https://github.com/Lundalogik/lime-elements/commit/fbe2caa))

# [3.2.0](https://github.com/Lundalogik/lime-elements/compare/v3.1.0...v3.2.0) (2018-08-20)


### Features

* **limel-list:** add list component ([ca12cf3](https://github.com/Lundalogik/lime-elements/commit/ca12cf3))
* **limel-picker:** add limel-picker component ([2233d84](https://github.com/Lundalogik/lime-elements/commit/2233d84))
* **limel-text-field:** add support for trailing icon ([3ffe17f](https://github.com/Lundalogik/lime-elements/commit/3ffe17f))
* **util:** export constants for keycodes ([9d698b1](https://github.com/Lundalogik/lime-elements/commit/9d698b1))

# [3.1.0](https://github.com/Lundalogik/lime-elements/compare/v3.0.1...v3.1.0) (2018-08-16)


### Features

* **limel-slider:** add slider component ([fb57234](https://github.com/Lundalogik/lime-elements/commit/fb57234))

## [3.0.1](https://github.com/Lundalogik/lime-elements/compare/v3.0.0...v3.0.1) (2018-08-08)


### Bug Fixes

* **limel-button:** make it possible to create button in loading state ([27d3c5f](https://github.com/Lundalogik/lime-elements/commit/27d3c5f)), closes [#52](https://github.com/Lundalogik/lime-elements/issues/52)

# [3.0.0](https://github.com/Lundalogik/lime-elements/compare/v2.4.1...v3.0.0) (2018-08-08)


### Bug Fixes

* **limel-button:** make limel-button display as inline-block ([0699df3](https://github.com/Lundalogik/lime-elements/commit/0699df3))
* **limel-button-group:** change styling attributes to css class names ([67c7fb3](https://github.com/Lundalogik/lime-elements/commit/67c7fb3))


### BREAKING CHANGES

* **limel-button-group:** Adding the `reverse-order` attribute no longer has any effect.

## [2.4.1](https://github.com/Lundalogik/lime-elements/compare/v2.4.0...v2.4.1) (2018-08-07)


### Bug Fixes

* **limel-switch:** correct colour for disabled switch in `on` state ([5b6fe02](https://github.com/Lundalogik/lime-elements/commit/5b6fe02))

# [2.4.0](https://github.com/Lundalogik/lime-elements/compare/v2.3.0...v2.4.0) (2018-08-06)


### Features

* **stencil:** stencil updated to version 0.11.0 ([2da2a38](https://github.com/Lundalogik/lime-elements/commit/2da2a38))

# [2.3.0](https://github.com/Lundalogik/lime-elements/compare/v2.2.2...v2.3.0) (2018-08-06)


### Bug Fixes

* **limel-text-field:** fix label floating on init of empty text-field ([dcb937e](https://github.com/Lundalogik/lime-elements/commit/dcb937e))


### Features

* **limel-autocomplete:** add limel-autocomplete component ([14f1967](https://github.com/Lundalogik/lime-elements/commit/14f1967))

## [2.2.2](https://github.com/Lundalogik/lime-elements/compare/v2.2.1...v2.2.2) (2018-08-02)


### Bug Fixes

* **limel-button:** add reflectToAttr to primitive properties ([77f4f10](https://github.com/Lundalogik/lime-elements/commit/77f4f10))
* **limel-dialog:** add reflectToAttr to primitive property ([d65944b](https://github.com/Lundalogik/lime-elements/commit/d65944b))
* **limel-select:** add reflectToAttr to primitive properties ([61bce7c](https://github.com/Lundalogik/lime-elements/commit/61bce7c))
* **limel-switch:** add reflectToAttr to primitive properties ([06fc6b1](https://github.com/Lundalogik/lime-elements/commit/06fc6b1))
* **limel-text-field:** add reflectToAttr to primitive properties ([ef7e70f](https://github.com/Lundalogik/lime-elements/commit/ef7e70f))

## [2.2.1](https://github.com/Lundalogik/lime-elements/compare/v2.2.0...v2.2.1) (2018-07-09)


### Bug Fixes

* **limel-spinner:** fix the broken `hidden` attribute ([204faa5](https://github.com/Lundalogik/lime-elements/commit/204faa5)), closes [#26](https://github.com/Lundalogik/lime-elements/issues/26)
* **limel-spinner:** fix the broken `size` attribute ([1599466](https://github.com/Lundalogik/lime-elements/commit/1599466)), closes [#25](https://github.com/Lundalogik/lime-elements/issues/25)

# [2.2.0](https://github.com/Lundalogik/lime-elements/compare/v2.1.0...v2.2.0) (2018-07-06)


### Features

* **limel-dialog:** add `limel-dialog` ([c6cf287](https://github.com/Lundalogik/lime-elements/commit/c6cf287))

# [2.1.0](https://github.com/Lundalogik/lime-elements/compare/v2.0.0...v2.1.0) (2018-07-05)


### Features

* **limel-text-field:** add limel-text-field ([a99caba](https://github.com/Lundalogik/lime-elements/commit/a99caba))

# [2.0.0](https://github.com/Lundalogik/lime-elements/compare/v1.4.2...v2.0.0) (2018-07-05)


### Continuous Integration

* **npm release:** update config for npm release ([7c44ef0](https://github.com/Lundalogik/lime-elements/commit/7c44ef0))


### BREAKING CHANGES

* **npm release:** All version 1.x releases are broken. There is no build output in the npm package
released.

# [1.5.0](https://github.com/Lundalogik/lime-elements/compare/v1.4.2...v1.5.0) (2018-07-05)


### Bug Fixes

* **package.json:** update release config ([98e583e](https://github.com/Lundalogik/lime-elements/commit/98e583e))


### Features

* **test:** no real commit ([769bb49](https://github.com/Lundalogik/lime-elements/commit/769bb49))

## [1.4.2](https://github.com/Lundalogik/lime-elements/compare/v1.4.1...v1.4.2) (2018-07-05)


### Bug Fixes

* **limel-select:** make 'disabled' property on option optional ([3c71ddb](https://github.com/Lundalogik/lime-elements/commit/3c71ddb))

## [1.4.1](https://github.com/Lundalogik/lime-elements/compare/v1.4.0...v1.4.1) (2018-07-05)


### Bug Fixes

* **limel-button:** make onClick work again ([95a8e58](https://github.com/Lundalogik/lime-elements/commit/95a8e58))
* **limel-select:** update property declarations ([c91ae26](https://github.com/Lundalogik/lime-elements/commit/c91ae26))
* **limel-switch:** update property declarations ([1c30951](https://github.com/Lundalogik/lime-elements/commit/1c30951))

# [1.4.0](https://github.com/Lundalogik/lime-elements/compare/v1.3.0...v1.4.0) (2018-06-29)


### Features

* **limel-select:** `limel-select` component added ([8f251b0](https://github.com/Lundalogik/lime-elements/commit/8f251b0))

# [1.3.0](https://github.com/Lundalogik/lime-elements/compare/v1.2.0...v1.3.0) (2018-06-29)


### Features

* **limel-switch:** `limel-switch` component added ([99ecb6b](https://github.com/Lundalogik/lime-elements/commit/99ecb6b))

# [1.2.0](https://github.com/Lundalogik/lime-elements/compare/v1.1.0...v1.2.0) (2018-06-28)


### Features

* **CI:** dummy minor bump ([65d1b9b](https://github.com/Lundalogik/lime-elements/commit/65d1b9b))
* **CI:** dummy minor bump plus debug flag ([250116b](https://github.com/Lundalogik/lime-elements/commit/250116b))

# [1.1.0](https://github.com/Lundalogik/lime-elements/compare/v1.0.0...v1.1.0) (2018-06-27)


### Bug Fixes

* **CI:** Debug flag removed ([d8185b1](https://github.com/Lundalogik/lime-elements/commit/d8185b1))
* **semantic-release:** Fixes bug in Makefile ([4faf38a](https://github.com/Lundalogik/lime-elements/commit/4faf38a))
* **semantic-release:** Fixes for npm publish ([feaca62](https://github.com/Lundalogik/lime-elements/commit/feaca62))
* **semantic-release:** Pass env-vars to container ([9343c36](https://github.com/Lundalogik/lime-elements/commit/9343c36))


### Features

* **README:** Improve readme ([7aced71](https://github.com/Lundalogik/lime-elements/commit/7aced71))
