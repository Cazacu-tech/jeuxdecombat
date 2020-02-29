class Heros{
    constructor(sante,noms,pouvoirs,armures,pointsDattaque,xps) {
        this.sante = sante
        this.noms = noms;
        this.pouvoirs = pouvoirs;
        this.armures = armures;
        this.pointsDattaque = pointsDattaque;
        this.xps = xps;
    }
            attaquer(cible) {

            if (this.sante > 0) { 
            const degats = this.pouvoirs;
            console.log(
              `${this.noms} attaque ${cible.nom} et lui inflige ${degats} points de dégâts`); 
              
                cible.sante -= degats;
                if (cible.sante > 0) {
                console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
        }   
                else {
                    cible.sante = 0;
                    const bonusXP = 20;
                    console.log(`${this.noms} a tué ${ cible.nom} et gagne ${bonusXP} points d'expérience ${this.xps += bonusXP}`);
        }
        } 
                else {
                    console.log(`${this.noms} n'a plus de points de vie et ne pas pas attaquer`);
        }
        }
            // Renvoie la description du personnage
                decrire() {
                return `${this.noms} a ${this.sante} points de vie, ${ this.pouvoirs} en pouvoir, ${this.xps} points d'expérience, une ${this.armures} et en point d'attaque ${this.pointsDattaque}`;
          
        }
           
        } 
      
      
        let malaku = new Heros  (150 ,'malaku', "lance flame","armure de diamant",25)
        malaku.decrire()
         let alexis = new Heros('Alexis');
         alexis.decrire()
         let marion = new Heros('Marion');
         marion.decrire()
         let mariam = new Heros('Mariam',);
        mariam.decrire()
         
    

       
      
     