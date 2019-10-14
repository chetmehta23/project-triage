var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
<<<<<<< HEAD
      fetch('waiting/index.php')
=======
      fetch('api/waiting/')
>>>>>>> 10-14-2019
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    },
    formatVisitDateLocal(d){
      return moment.utc(d).local().format("HH:mm MMM Do");
    },
    VisitDateSince(d){
      return moment.utc(d).local().fromNow();
    }
  },

  created() {
    this.fetchPatients();
  }
});
