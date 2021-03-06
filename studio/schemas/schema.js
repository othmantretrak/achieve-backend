// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import overOns from "./overOns";
import testimonials from "./testimonials";
import cases from "./cases";
//import socialMedia from "./siteInfo";
import team from "./team";
import siteInfo from "./siteInfo";
import faq from "./faq";
import logos from "./logos";
import settings from "./settings";
import tarieven from "./tarieven";
import service from "./service";
import terms from "./terms";
import privacy from "./privacy";
import faqCategory from "./faqCategory";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    //post,
    testimonials,
    cases,
    //author,
    faqCategory,
    team,
    tarieven,
    service,
    logos,
    terms,
    privacy,
    overOns,
    faq,
    category,
    siteInfo,
    settings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    //comment,
  ]),
});
