export class AdminOrderView {
    renderOrders(orders) {
        if (orders.length == 0) {
            return `<div>Đang tải đơn hàng...</div>`;
        }
        return orders.map((o, index) => ` 
        <tr>
            <td>${o.id}</td>
            <td>${o.user.name}</td>
            <td>${o.user.phone}</td>
            <td>${o.user.address}</td>
            <td>${new Date(o.createDate).toLocaleDateString('vi-VN')}</td>
            <td class="text-end">${o.total.toLocaleString('vi-VN')}đ</td>
            <td><span class="badge bg-${o.status == 'shipping' ? 'primary' : (o.status == 'cancel') ? 'danger' : (o.status == 'success') ?
            'success' : 'secondary'}">${o.status}</span></td>
            <td>
              <a
                href="admin-order-detail.html?id=${o.id}" class="btn btn-sm btn-primary"
                >Xem</a
              >
            </td>
          </tr>`).join('');
    }
}
// join('') chuyển mảng thành chuỗi
//# sourceMappingURL=AdminOrderView.js.map