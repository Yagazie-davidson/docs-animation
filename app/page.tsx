"use client";

import { A4Document } from "@/components/A4Document";
import { ChevronLeft, ChevronRight, Files } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 flex justify-center overflow-y-hidden w-full px-10">
      <div className="w-full">
        <div className="flex items-center justify-start">
          <motion.div
            className="w-fit z-0"
            initial={{ scale: 0.5, y: 350, rotate: -25, x: -60 }}
            animate={
              isAnimating
                ? { x: 550, y: 220, scale: 0.65, rotate: 0 }
                : { x: -60, y: 350, scale: 0.5, rotate: -25 }
            }
            // transition={{ duration: 0.5 }}
          >
            <A4Document
              companyName="Horizon Technologies"
              companyAddress="1234 Innovation Drive, Tech Valley, CA 94043"
              companyPhone="+1 (800) 555-1234"
              companyEmail="info@horizontech.com"
              className="flex-shrink-0"
            >
              <div className="space-y-6">
                <div className="text-right">
                  <p>{currentDate}</p>
                </div>

                <div className="space-y-1">
                  <p>John Smith</p>
                  <p>Customer Relations</p>
                  <p>Client Corporation</p>
                  <p>5678 Business Avenue</p>
                  <p>Enterprise City, NY 10001</p>
                </div>

                <div>
                  <p>Dear Mr. Smith,</p>
                </div>

                <div className="space-y-4">
                  <p>
                    Thank you for your interest in Horizon Technologies&apos;
                    services. We are pleased to provide you with the information
                    you requested regarding our latest software solutions.
                  </p>

                  <p>
                    Our team has carefully reviewed your requirements and we
                    believe our Enterprise Suite would be the perfect fit for
                    your organization&apos;s needs. This comprehensive package
                    includes:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Advanced data analytics dashboard</li>
                    <li>Integrated customer relationship management</li>
                    <li>Secure cloud storage with automatic backups</li>
                    <li>24/7 technical support and maintenance</li>
                  </ul>

                  <p>
                    We would be delighted to schedule a demonstration at your
                    convenience to showcase how our solutions can streamline
                    your operations and boost productivity.
                  </p>

                  <p>
                    Please feel free to contact me directly at the number below
                    if you have any questions or would like to arrange a
                    meeting.
                  </p>
                </div>

                <div className="space-y-4 pt-8">
                  <p>Sincerely,</p>

                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p>Business Development Manager</p>
                    <p>Horizon Technologies</p>
                    <p>sarah.johnson@horizontech.com</p>
                    <p>+1 (800) 555-5678</p>
                  </div>
                </div>
              </div>
            </A4Document>
          </motion.div>
          <motion.div
            className="w-fit z-50"
            initial={{ scale: 0.5, y: 300, rotate: 0, x: -300 }}
            animate={
              isAnimating
                ? { x: 170, y: 650, scale: 0.65, rotate: 0 }
                : { x: -300, y: 300, scale: 0.5, rotate: 0 }
            }
            // transition={{ duration: 0.5 }}
          >
            <A4Document
              companyName="Horizon Technologies"
              companyAddress="1234 Innovation Drive, Tech Valley, CA 94043"
              companyPhone="+1 (800) 555-1234"
              companyEmail="info@horizontech.com"
              className="flex-shrink-0"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">INVOICE</h2>
                    <p className="text-gray-600">INV-2023-0042</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Date: {currentDate}</p>
                    <p className="text-gray-600">Due Date: June 7, 2023</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Bill To:
                    </h3>
                    <div className="space-y-1">
                      <p>Client Corporation</p>
                      <p>Attn: Accounts Payable</p>
                      <p>5678 Business Avenue</p>
                      <p>Enterprise City, NY 10001</p>
                      <p>billing@clientcorp.com</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Payment Details:
                    </h3>
                    <div className="space-y-1">
                      <p>Bank: Pacific National Bank</p>
                      <p>Account: 1234567890</p>
                      <p>Routing: 987654321</p>
                      <p>Swift: PNBKUS12</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-black">
                        <th className="py-2 text-left">Description</th>
                        <th className="py-2 text-right">Quantity</th>
                        <th className="py-2 text-right">Unit Price</th>
                        <th className="py-2 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Enterprise Suite License</td>
                        <td className="py-3 text-right">5</td>
                        <td className="py-3 text-right">$1,200.00</td>
                        <td className="py-3 text-right">$6,000.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Implementation Services</td>
                        <td className="py-3 text-right">1</td>
                        <td className="py-3 text-right">$3,500.00</td>
                        <td className="py-3 text-right">$3,500.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Staff Training (8 hours)</td>
                        <td className="py-3 text-right">1</td>
                        <td className="py-3 text-right">$1,800.00</td>
                        <td className="py-3 text-right">$1,800.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Premium Support (1 year)</td>
                        <td className="py-3 text-right">1</td>
                        <td className="py-3 text-right">$2,400.00</td>
                        <td className="py-3 text-right">$2,400.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="py-3 text-right font-semibold">
                          Subtotal:
                        </td>
                        <td className="py-3 text-right">$13,700.00</td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="py-3 text-right font-semibold">
                          Tax (8%):
                        </td>
                        <td className="py-3 text-right">$1,096.00</td>
                      </tr>
                      <tr className="border-t border-black">
                        <td colSpan={2}></td>
                        <td className="py-3 text-right font-bold">Total:</td>
                        <td className="py-3 text-right font-bold">
                          $14,796.00
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="font-semibold">Terms & Conditions:</h3>
                  <p className="text-sm text-gray-600">
                    Payment is due within 30 days of invoice date. Late payments
                    are subject to a 1.5% monthly fee. Please include the
                    invoice number with your payment.
                  </p>
                </div>
              </div>
            </A4Document>
          </motion.div>
          <motion.div
            className="w-fit z-0"
            initial={{ scale: 0.5, y: 350, rotate: 30, x: -500 }}
            animate={
              isAnimating
                ? { x: 0, y: 240, scale: 0.65, rotate: 0 }
                : { x: -600, y: 350, scale: 0.5, rotate: 30 }
            }
            // transition={{ duration: 0.5 }}
          >
            <A4Document
              companyName="Horizon Technologies"
              companyAddress="1234 Innovation Drive, Tech Valley, CA 94043"
              companyPhone="+1 (800) 555-1234"
              companyEmail="info@horizontech.com"
              className="flex-shrink-0"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">INVOICE</h2>
                    <p className="text-gray-600">INV-2023-0042</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Date: {currentDate}</p>
                    <p className="text-gray-600">Due Date: June 7, 2023</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Bill To:
                    </h3>
                    <div className="space-y-1">
                      <p>Client Corporation</p>
                      <p>Attn: Accounts Payable</p>
                      <p>5678 Business Avenue</p>
                      <p>Enterprise City, NY 10001</p>
                      <p>billing@clientcorp.com</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Payment Details:
                    </h3>
                    <div className="space-y-1">
                      <p>Bank: Pacific National Bank</p>
                      <p>Account: 1234567890</p>
                      <p>Routing: 987654321</p>
                      <p>Swift: PNBKUS12</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-black">
                        <th className="py-2 text-left">Description</th>
                        <th className="py-2 text-right">Quantity</th>
                        <th className="py-2 text-right">Unit Price</th>
                        <th className="py-2 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Enterprise Suite License</td>
                        <td className="py-3 text-right">5</td>
                        <td className="py-3 text-right">$1,200.00</td>
                        <td className="py-3 text-right">$6,000.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Implementation Services</td>
                        <td className="py-3 text-right">1</td>
                        <td className="py-3 text-right">$3,500.00</td>
                        <td className="py-3 text-right">$3,500.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Staff Training (8 hours)</td>
                        <td className="py-3 text-right">1</td>
                        <td className="py-3 text-right">$1,800.00</td>
                        <td className="py-3 text-right">$1,800.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Premium Support (1 year)</td>
                        <td className="py-3 text-right">1</td>
                        <td className="py-3 text-right">$2,400.00</td>
                        <td className="py-3 text-right">$2,400.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="py-3 text-right font-semibold">
                          Subtotal:
                        </td>
                        <td className="py-3 text-right">$13,700.00</td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="py-3 text-right font-semibold">
                          Tax (8%):
                        </td>
                        <td className="py-3 text-right">$1,096.00</td>
                      </tr>
                      <tr className="border-t border-black">
                        <td colSpan={2}></td>
                        <td className="py-3 text-right font-bold">Total:</td>
                        <td className="py-3 text-right font-bold">
                          $14,796.00
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="font-semibold">Terms & Conditions:</h3>
                  <p className="text-sm text-gray-600">
                    Payment is due within 30 days of invoice date. Late payments
                    are subject to a 1.5% monthly fee. Please include the
                    invoice number with your payment.
                  </p>
                </div>
              </div>
            </A4Document>
          </motion.div>
        </div>
        {/* Container */}
        <motion.div
          initial={{ y: 0 }}
          animate={isAnimating ? { y: 50 } : { y: 0 }}
          className="bg-white h-52 max-w-[600px] mb-36 rounded-[30px] indexed py-7 px-10 mt-10 flex justify-between items-end relative z-20"
        >
          <div className="flex flex-col justify-between items-start h-full">
            <div className="flex items-center space-x-2 font-bold">
              <p>Documents</p> <Files size={17} />
            </div>
            <p className="text-gray-600 text-sm font-medium">3 files</p>
          </div>
          <motion.button
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.2, y: -2 }}
            onClick={handleClick}
            className="bg-gray-100 h-8 w-8 cursor-pointer rounded-full flex justify-center items-center indexed"
          >
            {isAnimating ? <ChevronLeft /> : <ChevronRight />}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
