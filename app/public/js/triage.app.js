var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/waiting/post.php', {
        method:'POST',
        body: JSON.stringify(this.patient),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { waitingApp.patients = json})
      .catch( err => {
        console.error('WORK TRIAGE ERROR:');
        console.error(err);
      })

<<<<<<< HEAD
       // TODO:
       fetch('api/waiting/post.php', {
         method:'POST',
         body: JSON.stringify(this.patient),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json())
       .then( json => {waitingApp.patients = json})
       .catch (err => {
         console.error ('WORK TRIAGE ERROR:')
         console.error(err);
       })

       this.handleReset();
=======
      this.handleReset();
>>>>>>> 10-14-2019
    },
    handleReset() {
      this.patient = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        visitDescription: '',
        // visitDateUtc
        priority: 'low'
      }
    }
  },
  created() {
    this.handleReset();
  }
});
