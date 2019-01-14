export class MyUserClass {
	//toutes les propriétés doivent être mis en puiblic car sinon il y aura un pb lors du build du projet
	public id: number;
	public email: string;
	// public mdp:string;
	public artistName: string;
	public firstName: string;
	public lastName: string;

	constructor(email: string, artistName: string, firstName: string, lastName: string) {
		this.email = email;
		// this.mdp = mdp;
		this.artistName = artistName;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public getId() {
		return this.id;
	}

	public getEmail() {
		return this.email;
	}

	public setEmail(email: string) {
		this.email = email;
	}

	// public getMdp(){
	// 	return this.mdp;
	// }

	// public setMdp(mdp:string){
	// 	this.mdp=mdp;
	// }

	public getArtistName() {
		return this.artistName;
	}

	public setArtistName(artistName: string) {
		this.artistName = artistName;
	}

	public getFirstName(){
		return this.firstName;
	}

	public setFirstName(firstName:string){
		this.firstName = firstName;
	}

	public getLastName(){
		return this.lastName;
	}

	public setLastName(lastName:string){
		this.lastName=lastName;
	}
}

