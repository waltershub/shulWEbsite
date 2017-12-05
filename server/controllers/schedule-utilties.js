const moment = require('moment');

exports.roundTime = (time) => {
  let unRoudedTime = moment(time);
  const checkTime = Number(time.format('h:mm A')[3]);
  if ((checkTime > 5 && checkTime > 7) || checkTime > 2) {
    while (unRoudedTime.format('h:mm A')[3] !== '0' && unRoudedTime.format('h:mm A')[3] !== '5') {
      unRoudedTime = unRoudedTime.add(1, 'm');
    }
  } else {
    while (unRoudedTime.format('h:mm A')[3] !== '0' && unRoudedTime.format('h:mm A')[3] !== '5') {
      unRoudedTime = unRoudedTime.subtract(1, 'm');
    }
  }
  return unRoudedTime.format('h:mm A');
};

exports.generatTime = (date, subtract, add) => {
  if (subtract && !add) return exports.roundTime(moment(date).subtract(subtract, 'm'));
  if (add) return moment(date).add(add, 'm').format('h:mm A');
  return moment(date).format('h:mm A');
};

exports.generateShulSchedule = (date, shkia, eruvShabbossOffset = 8, shabbosDayOffset = 25, marivAfterOffset = 50, shachris = '09:00', earlyMincha = null, morningShuir = '08:45') => {
  const fridayNightShedule = [['Mincha/Kabbalos Shabbos', exports.generatTime(`${date} ${shkia}`, eruvShabbossOffset)]];
  const shabbosDaySchedule = [['Chumash Shuir', exports.generatTime(`${date} ${morningShuir}`)], ['Shachris', exports.generatTime(`${date} ${shachris}`)], ['Mincha', exports.generatTime(`${date} ${shkia}`, shabbosDayOffset)], ['Maariv', exports.generatTime(`${date} ${shkia}`, shabbosDayOffset, marivAfterOffset)], ['Rabanu Tam', exports.generatTime(`${date} ${shkia}`, shabbosDayOffset, 72)]];

  return fridayNightShedule.concat(shabbosDaySchedule);
};

exports.getThisFriday = (day) => {
  let date = day || moment();
  while (!date.isoWeekday('friday')) {
    date = date.add(1, 'd');
  }
  return date.format('YYYY-MM-DD');
};
