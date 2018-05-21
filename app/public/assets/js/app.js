$(() => {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAcD-Z-rpHoK5bwrFQ5amWDJneTr-SZ59k",
        authDomain: "project-two-harkup.firebaseapp.com",
        databaseURL: "https://project-two-harkup.firebaseio.com",
        projectId: "project-two-harkup",
        storageBucket: "project-two-harkup.appspot.com",
        messagingSenderId: "614544647683"
    };
    firebase.initializeApp(config);

    // When user click the play button, playback article
    $("#play").on("click", (event) => {
        event.preventDefault();
        const title = $("#article-title").text();
        const content = $("#article-content").text();
        playArticle(title, content);

    });

    function playArticle(title, content) {
        responsiveVoice.speak(title, "UK English Male");
        responsiveVoice.speak(content, "UK English Female");
    }

    // User login
    $("#login-btn").on("click", (e) => {
        // Add the FirebaseUI widget element to the DOM
        const body = document.getElementById("body");
        const fbDiv = document.createElement("div");
        fbDiv.setAttribute("id", "firebaseui-auth-container");
        body.appendChild(fbDiv);

        // Initialize sign-in widget from FirebaseUI web
        var uiConfig = {
            signInSuccessUrl: "/authentication",
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };


        // Initialize the FirebaseUI Widget using Firebase
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);

    });

    // Event listener for when the Sign Up button is clicked
    $("#signup-btn").on("click", (e) => {
        e.preventDefault();

        const newUser = {
            firstName: $("#firstName").val().trim(),
            lastName: $("#lastName").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim()
        };

        // User Firebase Authentication
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
        promise.catch(err => alert(err.message));

        // Send form data to the server
        $.post("/signup", newUser).then(data => {
            console.log(data);
        });
    });

    // Event listener for when the user state changes
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            // console.log(`User logged in: ${JSON.stringify(firebaseUser.email)}`);
            console.log(`User Details: ${JSON.stringify(firebaseUser.providerData, null, 2)}`);
        }
        else
            console.log("Not logged in");
    });

    // Event listener for when the Logout Button is clicked
    $("#logout-btn").on("click", (e) => {
        firebase.auth().signOut();
    });
});
