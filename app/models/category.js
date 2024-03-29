import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  budget: DS.attr('number'),
  active: DS.attr('boolean')
});