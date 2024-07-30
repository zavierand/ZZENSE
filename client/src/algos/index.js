// these are functions and algorihtms that will be used by the
// the front end for different purposes (sorting by price, etc.)

export const mergeSort = (arr, l, r) => {
    const m = Math.floor(l + (r - l) / 2);
    if (l >= r) return;

    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r); 
};

const merge = (arr, l, m, r) => {
    const n_1 = m - l + 1;
    const n_2 = r - m;

    const left = new Array(n_1);
    const right = new Array(n_2);

    for (let i = 0; i < n_1; i++) {
        left[i] = arr[l + i];
    }

    for (let i = 0; i < n_2; i++) {
        right[i] = arr[m + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n_1 && j < n_2) {
        if (left[i].name <= right[j].name) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < n_1) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < n_2) {
        arr[k] = right[j];
        j++;
        k++;
    }
};

export const sortPrices = (arr, l, r) => {
    const m = l + (r - l) / 2;
    if (l >= r) return;

    sortPrices(arr, l, m);
    sortPrices(arr, m + 1, r);
    sortPricesLowToHigh(arr, l, m, r);
};

export const sortPricesLowToHigh = (arr, l, m, r) => {
    const n_1 = m - l + 1;
    const n_2 = r - m;

    const left = new Array(n_1);
    const right = new Array(n_2);

    for (let i = 0; i < n_1; i++) {
        left[i] = arr[l + i];
    }

    for (let i = 0; i < n_2; i++) {
        right[i] = arr[m + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n_1 && i < n_2) {
        if (left[i].price <= right[j].price) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < n_1) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < n_2) {
        arr[k] = right[j];
        j++;
        k++;
    }
};

export const sortPricesHighToLow = (arr, l, m, r) => {
    const n_1 = m - l + 1;
    const n_2 = r - m;

    const left = new Array(n_1);
    const right = new Array(n_2);

    for (let i = 0; i < n_1; i++) {
        left[i] = arr[l + i];
    }

    for (let i = 0; i < n_2; i++) {
        right[i] = arr[m + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n_1 && i < n_2) {
        if (left[i].price >= right[j].price) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < n_1) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < n_2) {
        arr[k] = right[j];
        j++;
        k++;
    }
};