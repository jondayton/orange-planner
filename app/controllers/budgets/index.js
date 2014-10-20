import Ember from 'ember';
computed = Ember.computed;

export default Ember.Controller.extend({
  oneWeekAgoTotal: computed('oneWeekAgo', function(){
//    @one_week_ago.inject(0) {|sum, hash| sum + hash[category.id][:activities][activity.old_id][:total] } > 0

  });
});
