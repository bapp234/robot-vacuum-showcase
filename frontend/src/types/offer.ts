export interface ClaimOfferForm {
  fullName: string;

  email: string;

  phone: string;

  city?: string;

  receivePromotion: boolean;

  receiveConsultation: boolean;
}
export interface ClaimOfferResponse {
  success: boolean;

  message: string;

  discountCode?: string;
}