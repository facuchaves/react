import commonsResource from './commons.resource';
import entityResource from './entity.resource';
import footerResource from './footer.resource';
import dashboardResource from './dashboard.resource';

// TODO Improve this ...
const resources = {
  en: {
    translation: {
      ...commonsResource.en.translation,
      ...entityResource.en.translation,
      ...footerResource.en.translation,
      ...dashboardResource.en.translation,
    },
  },
};

export default resources;
