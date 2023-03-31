//Singleton - GoF |

export class Database {
  private static database: Database;
  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void { console.log(`Connect: ${this.host}, ${this.user}, ${this.password}`); }

  //Factory Method
  static getDatabase(host: string, user: string, password: string): Database {
    if(Database.database) return Database.database;
    Database.database = new Database(host, user, password)
    return Database.database;
  }
}

const db = new Database('localhost', 'root', 'admin');
db.connect();
