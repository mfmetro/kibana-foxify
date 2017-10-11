# Kibana Foxify

Kibana Foxify is a Firefox addon that fixes the problem that the autocomplete dialog hides the input field in Kibana 4 (cf. https://github.com/elastic/kibana/issues/7801).

The core code of this addon is based on the [Kibana Fixify Chrome Extension](https://chrome.google.com/webstore/detail/kibana-fixify/malbepndklhdndhmmfkbdchhmnbhnllg) created by Maarten Cautreels. This addon is published with his kind approval.

## Installing

There are multiple was to install this addon. Installing from the signed `xpi` is the easiest and thus preferred way.

### From XPI File

Install Kibana Foxify from [latest release page](https://github.com/mfmetro/kibana-foxify/releases/latest). Click on the `xpi` file you find there and Firefox should automatically ask you to add it to your addons. If this is not the case, just download the file and drag&drop it into your running Firefox instance.

### Debugging

Check out this repository, open the about:debugging page in Firefox, click on "Load Temporary Add-on" and select any file in this repository's directory. Please be aware that the next time you start Firefox, Kibana Foxify will not be loaded automatically.

For more information, please see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension#Installing.
