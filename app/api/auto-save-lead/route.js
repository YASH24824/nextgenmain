import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Your database insert/update logic here
    // Example with your DB:
    // const result = await db.query(`
    //   INSERT INTO leads 
    //   (session_id, name, phone, state, platform, ad_name, external_lead_id, created_at)
    //   VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
    //   ON CONFLICT (session_id) 
    //   DO UPDATE SET
    //     name = EXCLUDED.name,
    //     phone = EXCLUDED.phone,
    //     state = EXCLUDED.state,
    //     platform = EXCLUDED.platform,
    //     ad_name = EXCLUDED.ad_name,
    //     external_lead_id = EXCLUDED.external_lead_id,
    //     updated_at = NOW()
    // `, [
    //   data.sessionId,
    //   data.name,
    //   data.phone,
    //   data.state,
    //   data.platform,
    //   data.ad_name,
    //   data.external_lead_id
    // ]);

    return NextResponse.json({
      success: true,
      message: 'Data saved successfully',
      data: data
    });

  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json(
      { error: 'Failed to save data' },
      { status: 500 }
    );
  }
}