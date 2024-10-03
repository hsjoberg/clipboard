import { TurboModule, EmitterSubscription } from 'react-native';
import type { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
export interface Spec extends TurboModule {
    /**
     * Get content of string type, this method returns a `Promise`, so you can use following code to get clipboard content
     * ```javascript
     * async _getContent() {
     *   var content = await Clipboard.getString();
     * }
     * ```
     */
    getString(): Promise<string>;
    /**
     * (iOS Only)
     * Get contents of string array type, this method returns a `Promise`, so you can use following code to get clipboard content
     * ```javascript
     * async _getContent() {
     *   var content = await Clipboard.getStrings();
     * }
     * ```
     */
    getStrings(): Promise<string[]>;
    /**
     * Get clipboard image as PNG in base64, this method returns a `Promise`, so you can use following code to get clipboard content
     * ```javascript
     * async _getContent() {
     *   var content = await Clipboard.getImagePNG();
     * }
     * ```
     */
    getImagePNG(): Promise<string>;
    /**
     * Get clipboard image as JPG in base64, this method returns a `Promise`, so you can use following code to get clipboard content
     * ```javascript
     * async _getContent() {
     *   var content = await Clipboard.getImageJPG();
     * }
     * ```
     */
    getImageJPG(): Promise<string>;
    /**
     * (iOS Only)
     * Set content of base64 image type. You can use following code to set clipboard content
     * ```javascript
     * _setContent() {
     *   Clipboard.setImage(...);
     * }
     * ```
     * @param the content to be stored in the clipboard.
     */
    setImage(content: string): Promise<void>;
    /**
     * (Android Only)
     * Get clipboard image in base64, this method returns a `Promise`, so you can use following code to get clipboard content
     * ```javascript
     * async _getContent() {
     *   var content = await Clipboard.getImage();
     * }
     * ```
     */
    getImage(): Promise<string>;
    /**
     * Set content of string type. You can use following code to set clipboard content
     * ```javascript
     * _setContent() {
     *   Clipboard.setString('hello world');
     * }
     * ```
     * @param the content to be stored in the clipboard.
     */
    setString(content: string): void;
    /**
     * Set content of string array type. You can use following code to set clipboard content
     * ```javascript
     * _setContent() {
     *   Clipboard.setStrings(['hello world', 'second string']);
     * }
     * ```
     * @param the content to be stored in the clipboard.
     */
    setStrings(content: string[]): void;
    /**
     * Returns whether the clipboard has content or is empty.
     * This method returns a `Promise`, so you can use following code to get clipboard content
     * ```javascript
     * async _hasContent() {
     *   var hasContent = await Clipboard.hasString();
     * }
     * ```
     */
    hasString(): Promise<boolean>;
    /**
     * Returns whether the clipboard has an image or is empty.
     * This method returns a `Promise`, so you can use following code to check clipboard content
     * ```javascript
     * async _hasContent() {
     *   var hasContent = await Clipboard.hasImage();
     * }
     * ```
     */
    hasImage(): Promise<boolean>;
    /**
     * (iOS Only)
     * Returns whether the clipboard has a URL content. Can check
     * if there is a URL content in clipboard without triggering PasteBoard notification for iOS 14+
     * This method returns a `Promise`, so you can use following code to check for url content in clipboard.
     * ```javascript
     * async _hasURL() {
     *   var hasURL = await Clipboard.hasURL();
     * }
     * ```
     */
    hasURL(): Promise<boolean>;
    /**
     * (iOS 14+ Only)
     * Returns whether the clipboard has a Number(UIPasteboardDetectionPatternNumber) content. Can check
     * if there is a Number content in clipboard without triggering PasteBoard notification for iOS 14+
     * This method returns a `Promise`, so you can use following code to check for Number content in clipboard.
     * ```javascript
     * async _hasNumber() {
     *   var hasNumber = await Clipboard.hasNumber();
     * }
     * ```
     */
    hasNumber(): Promise<boolean>;
    /**
     * (iOS 14+ Only)
     * Returns whether the clipboard has a WebURL(UIPasteboardDetectionPatternProbableWebURL) content. Can check
     * if there is a WebURL content in clipboard without triggering PasteBoard notification for iOS 14+
     * This method returns a `Promise`, so you can use following code to check for WebURL content in clipboard.
     * ```javascript
     * async _hasWebURL() {
     *   var hasWebURL = await Clipboard.hasWebURL();
     * }
     * ```
     */
    hasWebURL(): Promise<boolean>;
    setListener(): void;
    removeListener(): void;
    addListener(eventName: string): void;
    removeListeners(count: Int32): void;
}
declare const ClipboardTurboModule: Spec;
export default ClipboardTurboModule;
declare const addListener: (callback: () => void) => EmitterSubscription;
declare const removeAllListeners: () => void;
export { addListener, removeAllListeners };
