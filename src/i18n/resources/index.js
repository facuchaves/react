import commonsResource from "./commons.resource";
import issueResource from "./issue.resource";
import footerResource from "./footer.resource";

// TODO Improve this ...
const resources = { 
        en:{
            translation:{
                ...commonsResource.en.translation,
                ...issueResource.en.translation,
                ...footerResource.en.translation,
            }
        }
    }

export default resources