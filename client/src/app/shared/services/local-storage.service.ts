/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  /**
   *Saves @param value to local storage under the name @param key
   * @param key is a string that represents the key or name under which the data will be stored in the local storage
   * @param value is the data that would be stored in the local storage.
   */
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @returns Retrieve @param key from local storage
   */
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  /**Clear the local storage */
  clear(): void {
    localStorage.clear();
  }
}
