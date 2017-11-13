import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'shortenText'
})

export class ShortenPipe implements PipeTransform {
  // transform string with default value if limit not provided
  transform(value: any, limit: number = 10, firstCapital?: boolean) {
    let substringed = value.substr(0, limit);
    // transform first letter to capital ONLY if its not capital
    if (
      firstCapital &&
      !(substringed.charAt(0) === substringed.charAt(0).toUpperCase())) {
      substringed = substringed.charAt(0).toUpperCase() + substringed.slice(1);
      console.log(true);
    }
    if (value.indexOf(' ') === limit) {
      return substringed;
    } else {
      return `${substringed}...`;
    }
  }
}