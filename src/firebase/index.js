import firebase from "./clientApp";

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * ( i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default {
    signIn: () => {
        firebase.auth().signInAnonymously();
    },
    getAllQuestions: (season = "seasonOne") => {
        return firebase.firestore().collection(`Trivias/${season}/questions`).get()
            .then(CollectionSnapshot => {
                const data = CollectionSnapshot.docs;
                let questions = [];
                data.map(document => {
                    const doc = document.data();
                    doc.options = shuffle(doc.options);
                    questions.push(doc);
                })
                return shuffle(questions);
            });
    },
    saveTriviaEntry: (user, season = "seasonOne", totalCorrect, maxScore) => {
        return firebase.firestore().collection(`Leaderboard/${season}/entries`).add({
            name: user.name,
            score: totalCorrect,
            maxScore: maxScore
        })
        .catch(err => {
            console.log("[firebase] error saving entry ", error);
        })
    }
}
