export default {
    name: 'dateMixin',

    methods: {
        vendrediSuivant(date) {
            const myDate = this.jourSuivant(date, 5);
            return this.formatFrench(myDate);
        },

        dimancheSuivant(date) {
            const myDate = this.jourSuivant(date, 7);
            return this.formatFrench(myDate);
        },

        jourSuivantSemaineProchaine(date) {
            let newDate = new Date();
            newDate.setDate(date.getDate() + 7);
            return newDate;
        },

        jourSuivant(date, day) {
            date.setDate(date.getDate() + (day + 7 - date.getDay()) % 7);
            return date;
        },

        jourCorrespondant(day) {
            switch (day) {
                case 1:
                    return 'Lundi';
                case 2:
                    return 'Mardi';
                case 3:
                    return 'Mercredi';
                case 4:
                    return 'Jeudi';
                case 5:
                    return 'Vendredi';
                case 6:
                    return 'Samedi';
                default:
                    return 'Dimanche';
            }
        },

        formatFrench(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString("fr-FR", options);
        }
    }
};
