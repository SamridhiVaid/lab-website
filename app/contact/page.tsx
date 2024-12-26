import React from 'react';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Users } from 'lucide-react'

// Main Page Component
export default function ContactUsPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <Card className="bg-slate-50">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {/* Join the Lab Section */}
                  <div className="flex gap-4 text-left">
                    <div className="mt-1">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Interested in Joining Our Lab?
                      </h3>
                      <p className="text-muted-foreground">
                        Please visit the personal websites of our <a href='/people' className='text-blue-600'>Principal Investigators</a> and reach out to them directly
                        to discuss potential opportunities and openings.
                      </p>
                    </div>
                  </div>

                  {/* Contact Team Members Section */}
                  <div className="flex gap-4 text-left">
                    <div className="mt-1">
                      <ExternalLink className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Contact Team Members
                      </h3>
                      <p className="text-muted-foreground">
                        Looking to contact a specific <a href='/people' className='text-blue-600'>team member</a>? You can find their direct contact information
                        through their personal webpage links listed in their profiles.
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}