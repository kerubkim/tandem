import firebase from "./clientApp";

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

export default {
	signIn: () => {
		firebase.auth().signInAnonymously();
	},
	getAllQuestions: (season = "seasonOne") => {
		return firebase
			.firestore()
			.collection(`Trivias/${season}/questions`)
			.get()
			.then((CollectionSnapshot) => {
				const data = CollectionSnapshot.docs;
				let questions = [];
				data.map((document) => {
					const doc = document.data();
					doc.options = shuffle(doc.options);
					questions.push(doc);
				});
				return shuffle(questions);
			});
	},
	saveTriviaEntry: (user, season = "seasonOne", totalCorrect, maxScore) => {
		return firebase
			.firestore()
			.collection(`Leaderboard/${season}/entries`).doc(user.uid)
			.set({
				name: user.name,
				score: Math.floor((totalCorrect / maxScore) * 100),
			})
			.catch((err) => {
				console.log("[firebase] error saving entry ", error);
			});
	},
    getUserResult: async (userUID, season = "seasonOne") => {
        const entriesRef = firebase.firestore().collection(`Leaderboard/${season}/entries`);
        const userScoreSnapshot = await entriesRef.doc(userUID).get();
        const userScoreData = userScoreSnapshot.data();
        const scoreListSnapshot = await entriesRef.where("score", "<", userScoreData.score).get();
        const sameScoreSnapshot = await entriesRef.where("score", "==", userScoreData.score).get(); 
        let temp = sameScoreSnapshot.docs;
        temp.map((document, index) => {
            // remove user owed entry
            if(document.id === userUID) {
                temp.splice(index, 1)
            }
        })
        return {entry: userScoreData, lowScore: scoreListSnapshot.size, sameScore: temp.length};
    }
};
