angular
  .module('mwl.calendar.docs') //you will need to declare your module with the dependencies ['mwl.calendar', 'ui.bootstrap', 'ngAnimate']
  .controller('3DaysWeek', function(moment, calendarConfig) {
    var vm = this;
    vm.weekViewDays = 3; //number of days in week <1..7>, if not set full week of 7 days is used

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'week';
    vm.viewDate = new Date();

    vm.events = [{
        title: 'An 2-day event',
        color: calendarConfig.colorTypes.info,
        startsAt: moment(vm.viewDate).add(1, 'day').toDate(),
        endsAt: moment(vm.viewDate).add(2, 'day').toDate()
      },
      {
        title: 'An 4-day event',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment(vm.viewDate).add(1, 'day').toDate(),
        endsAt: moment(vm.viewDate).add(4, 'day').toDate()
      },
      {
        title: 'An 5-day event',
        color: calendarConfig.colorTypes.error,
        startsAt: moment(vm.viewDate).startOf('day').toDate(),
        endsAt: moment(vm.viewDate).add(5, 'day').toDate()
      }
    ];

    vm.cellIsOpen = true;

  });
