import { TextType, FNProperty, ExtendedProperty, VCARD } from "vcard4";

// This is work.
const vCard0 = new VCARD([
  new FNProperty([], new TextType("Unuaviro F. Arĝentakato")),
  new ExtendedProperty("X-CAR", [], new TextType("Subaru")),
]);

console.log(vCard0.repr());

// This is *NOT* work.
const vCard1 = new VCARD([
  new FNProperty([], new TextType("Unuaviro F. Arĝentakato")),
  new ExtendedProperty("X-PHONETIC-FIRST-NAME", [], new TextType("ウヌアヴィーロ")),
]);

console.log(vCard1.repr());



