import http from "../http-common";

class MissionCommanderService {
  getAll() {
    return http.get("/msCommanders");
  }
  get(id) {
    return http.get(`/msCommanders/${id}`);
  }
  create(data) {
    return http.post("/msCommanders", data);
  }
  update(id, data) {
    return http.put(`/msCommanders/${id}`, data);
  }
  delete(id) {
    return http.delete(`/msCommanders/${id}`);
  }
}

export default new MissionCommanderService();
