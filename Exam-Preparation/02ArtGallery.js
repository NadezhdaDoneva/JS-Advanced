class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = []; 
    }

    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase();
        if(this.possibleArticles.hasOwnProperty(articleModel)){
            let foundAricleName = this.listOfArticles.find(el=>el.articleName==articleName);
            if(foundAricleName){
                if(foundAricleName.articleModel==articleModel){
                    foundAricleName.quantity+=quantity
                } else {
                    this.listOfArticles.push({articleModel, articleName, quantity});
                    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
                }
            } else {
                this.listOfArticles.push({articleModel, articleName, quantity});
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            }
        } else {
            throw new Error ("This article model is not included in this gallery!");
        }
    }

    inviteGuest (guestName, personality){
        let foundGuest = this.guests.find(el=>el.guestName==guestName);
        if(!foundGuest){
            let purchaseArticle = 0;
            let points = 0;
            if(personality=='Vip'){
                points = 500;
            } else if(personality=='Middle'){
                points = 250;
            } else {
                points = 50;
            }
            this.guests.push({guestName, points, purchaseArticle});
            return `You have successfully invited ${guestName}!`
        } else {
            throw new Error (`${guestName} has already been invited.`)
        }
    }

    buyArticle (articleModel, articleName, guestName){
        articleModel=articleModel.toLowerCase();
        let foundAricleName = this.listOfArticles.find(el=>el.articleName==articleName);
        if(foundAricleName){
            if(foundAricleName.articleModel==articleModel){
                if(foundAricleName.quantity==0){
                    return `The ${articleName} is not available.`
                } else{
                    let foundGuest = this.guests.find(el=>el.guestName==guestName);
                    if(foundGuest){
                        let pointsNeeded = this.possibleArticles[articleModel];
                        if(foundGuest.points>=pointsNeeded){
                            foundGuest.points-=pointsNeeded;
                            foundAricleName.quantity--;
                            foundGuest.purchaseArticle++;
                            return `${guestName} successfully purchased the article worth ${pointsNeeded} points.`
                        } else {
                            return "You need to more points to purchase the article.";
                        }
                    } else{
                        return "This guest is not invited.";
                    }
                }
            } else {
                throw new Error("This article is not found.");
            }
        } else{
            throw new Error("This article is not found.");
        }
    }

    showGalleryInfo (criteria){
        if(criteria=='article'){
            let res = ['Articles information:'];
            for (const el of this.listOfArticles) {
                res.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`)
            }
            return res.join('\n');
        }
        if(criteria=='guest'){
            let res = ['Guests information:'];
            for (const el of this.guests) {
                res.push(`${el.guestName} - ${el.purchaseArticle}`)
            }
            return res.join('\n');
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


