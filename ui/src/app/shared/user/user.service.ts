import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {User} from './user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  currentUserWasModified = new Subject<User>();
  private _currentUser: User;
  private _userFromDatabase: User;
  private _maxLengthSavedInstructionSheetsIds = 7;
  private _maxLengthRecentlyDownloadedInstructionSheetIds = 7;

  constructor(private _http: Http) {
  }

  private _removeSpecialCharactersFromEmailAddress(emailAddress: string): string {
    return emailAddress.replace(/[^a-zA-Z0-9]/g, 'z');
  }

  private _putUserIntoDatabase(user: User) {
    return this._http.put(
      'https://instructionsheets-ad427.firebaseio.com/users/' + this._removeSpecialCharactersFromEmailAddress(user.emailAddress) + '.json',
      user
    ).catch(
      (error: Response) => {
        return Observable.throw({msg: 'Failure saving user attributes', error: error});
      }
    );
  }

  private _getUserFromDatabase(emailAddress: string) {
    return this._http.get(
      'https://instructionsheets-ad427.firebaseio.com/users/' + this._removeSpecialCharactersFromEmailAddress(emailAddress) + '.json',
    )
      .map(
        (response: Response) => {
          const user: User = response.json();
          if (user) {
            if (!user['savedInstructionSheetsIds']) {
              user['savedInstructionSheetsIds'] = [];
            }
            if (!user['recentlyDownloadedInstructionSheetIds']) {
              user['recentlyDownloadedInstructionSheetIds'] = [];
            }
          }
          this._userFromDatabase = user;
          return user;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw({msg: 'Failure reading user attributes', error: error});
        }
      );
  }

  private _addUser(user: User) {
    this._putUserIntoDatabase(user)
      .subscribe(
        (response: Response) => {
        }
        ,
        (error) => {
          console.log(error);
        });

  }

  private _updateUser(user: User) {
    this._putUserIntoDatabase(user)
      .subscribe(
        (response: Response) => {
        }
        ,
        (error) => {
          console.log(error);
        });
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        resolve(typeof this.getCurrentUser() !== 'undefined');
      }
    );
  }

  getCurrentUser(): User {
    return this._currentUser;
  }

  setCurrentUser(emailAddress: string) {
    this._currentUser = {
      emailAddress: emailAddress,
      savedInstructionSheetsIds: [],
      recentlyDownloadedInstructionSheetIds: []
    };
    this._getUserFromDatabase(emailAddress)
      .subscribe(
        (user: User) => {
          this._userFromDatabase = user;
          if (!user) {
            user = {
              emailAddress: emailAddress,
              savedInstructionSheetsIds: [],
              recentlyDownloadedInstructionSheetIds: []
            };
            this._addUser(user);
          }
          this._currentUser = user;
          this.currentUserWasModified.next(this._currentUser);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private _updateCurrentUser() {
    this._updateUser(this._currentUser);
    this.currentUserWasModified.next(this._currentUser);
  }

  addSavedInstructionSheetsId(InstructionSheetsId: number) {
    this._currentUser.savedInstructionSheetsIds = this._addToFixLengthArray(
      this._currentUser.savedInstructionSheetsIds,
      this._maxLengthSavedInstructionSheetsIds,
      InstructionSheetsId
    );
    this._updateCurrentUser();
  }

  deleteSavedInstructionSheetsId(InstructionSheetsId: number) {
    const index = this._currentUser.savedInstructionSheetsIds.indexOf(InstructionSheetsId);
    if (index > -1) {
      this._currentUser.savedInstructionSheetsIds.splice(index, 1);
    }
    this._updateCurrentUser();
  }

  addRecentlyDownloadedInstructionSheetId(InstructionSheetsId: number) {
    this._currentUser.recentlyDownloadedInstructionSheetIds = this._addToFixLengthArray(
      this._currentUser.recentlyDownloadedInstructionSheetIds,
      this._maxLengthRecentlyDownloadedInstructionSheetIds,
      InstructionSheetsId
    );
    this._updateCurrentUser();
  }

  deleteRecentlyDownloadedInstructionSheetId(InstructionSheetsId: number) {
    const index = this._currentUser.recentlyDownloadedInstructionSheetIds.indexOf(InstructionSheetsId);
    if (index > -1) {
      this._currentUser.recentlyDownloadedInstructionSheetIds.splice(index, 1);
    }
    this._updateCurrentUser();
  }

  private _addToFixLengthArray(fixedLengthArray: number[], maxLegth: number, element: number): number[] {
    if (fixedLengthArray.indexOf(element) < 0) { // if not an existing element -> proceed with insert
      if (fixedLengthArray.length < maxLegth) {
        fixedLengthArray.push(element);
      } else {
        const shifted = fixedLengthArray.shift();
        fixedLengthArray.push(element);
      }
    }
    return fixedLengthArray;
  }
}
