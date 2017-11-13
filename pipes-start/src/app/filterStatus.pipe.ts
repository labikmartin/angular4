import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterByStatus'
})

export class FilterStatus implements PipeTransform {
  transform(value: any, filterBy?: string) {
    const result = [];
    // return value if no values or filter is unset
    if (
      value.length === 0 ||
      !filterBy
    ) {
      return value;
    }
    // iterate throu value array and return new filtered array
    for (let item of value) {
      if (item.status == filterBy.toLowerCase()) {
        result.push(item);
      }
    }
    return result;
  }
}
