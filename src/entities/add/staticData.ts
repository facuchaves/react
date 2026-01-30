import i18n from 'i18next';

export const skillsOptions = [
  {id: 1, value: 'nodejs', label: i18n.t('entity.skills.nodejs')},
  {id: 2, value: 'react', label: i18n.t('entity.skills.react')},
];

export const statusOptions = [
  {id: 1, value: 'pending', label: i18n.t('entity.state.pending')},
  {id: 2, value: 'confirmed', label: i18n.t('entity.state.confirmed')},
];

export const genderOptions = [
  {id: 1, value: 'female', label: i18n.t('entity.gender.female')},
  {id: 2, value: 'male', label: i18n.t('entity.gender.male')},
  {id: 3, value: 'other', label: i18n.t('entity.gender.other')},
];
