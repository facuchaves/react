import commonsResource from "./commons.resource";
import playerResource from "./player.resource";
import footerResource from "./footer.resource";

// TODO Improve this ...
const resources = { 
        en:{
            translation:{
                ...commonsResource.en.translation,
                ...playerResource.en.translation,
                ...footerResource.en.translation,
            }
        }
    }

export default resources